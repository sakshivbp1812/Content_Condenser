import React, { useState, useEffect } from "react";
import YouTube from "react-youtube";
import { Button, Grid, TextField } from "@material-ui/core";

const VideoSummarization = () => {
  const [videoUrl, setVideoUrl] = useState("");
  const [summary, setSummary] = useState("");

  const fetchSummary = async () => {
    // Implement the code to fetch the summary of the YouTube video here
    const apiKey = "YOUR_API_KEY";
    const url = `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoUrl}&key=${apiKey}`;
    const response = await fetch(url);
    const data = await response.json();
    const summary = data.items[0].snippet.description;
    setSummary(summary);
  };

  useEffect(() => {
    // This effect can remain empty for now
  }, [videoUrl]);

  // ...

return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <TextField
          id="video-url"
          label="YouTube Video URL"
          value={videoUrl}
          onChange={(e) => setVideoUrl(e.target.value)}
          className="custom-video-container" // Apply custom style
        />
      </Grid>
      <Grid item xs={12}>
        <Button onClick={fetchSummary} className="custom-button">Summarize</Button> {/* Apply custom style */}
      </Grid>
      <Grid item xs={12}>
        <YouTube videoId={videoUrl} className="custom-video-container" /> {/* Apply custom style */}
      </Grid>
      <Grid item xs={12}>
        <TextField
          id="summary"
          label="Summary"
          multiline
          rows={4}
          value={summary}
          disabled
          className="custom-summary" // Apply custom style
        />
      </Grid>
    </Grid>
  );
};
  
  export default VideoSummarization;