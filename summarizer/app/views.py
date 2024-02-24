from django.shortcuts import render
from django.core.mail import send_mail
from django.template.loader import render_to_string
from django.utils.http import urlsafe_base64_encode
from django.utils.encoding import force_bytes
from django.contrib.auth.tokens import default_token_generator
from django.contrib.auth.models import User
from django.http import JsonResponse

def register(request):
    if request.method == 'POST':
        email = request.POST.get('email')
        password = request.POST.get('password')
        confirm_password = request.POST.get('confirm_password')

        if password != confirm_password:
            return JsonResponse({'error': 'Passwords do not match'}, status=400)

        # Check if the email is already in use
        if User.objects.filter(email=email).exists():
            return JsonResponse({'error': 'Email already exists'}, status=400)

        try:
            # Create user
            user = User.objects.create_user(email=email, password=password)
            user.is_active = False
            user.save()

            # Send verification email
            token = default_token_generator.make_token(user)
            uid = urlsafe_base64_encode(force_bytes(user.pk))
            verification_url = f"http://localhost:3000/verify/{uid}/{token}/"  # Replace with frontend verification URL
            send_mail(
                'Verify your email',
                render_to_string('registration/email_verification.html', {'verification_url': verification_url}),
                'from@example.com',  # Replace with sender email
                [email],
                fail_silently=False,
            )

            return JsonResponse({'message': 'User registered successfully. Verification email sent.'}, status=201)
        except Exception as e:
            # Handle exceptions (e.g., database error, email sending failure)
            return JsonResponse({'error': str(e)}, status=500)

    return JsonResponse({'error': 'Invalid request method'}, status=405)
def home(request):
    return render(request, 'home.html')  # Assuming you have a template named 'home.html'

