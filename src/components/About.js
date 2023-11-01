import React from "react";
import "./About.css"; // Import the CSS file for styling

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        {/* background image */}
      </div>
      <div className="about-content">
        <h2>ABOUT</h2>
        <h1>Content Condenser</h1>
        <p>Content Condenser is a cutting-edge YouTube video summarization application that leverages advanced technologies to provide professionals with quick and informative video summaries.</p>

        <h3>Technology Used</h3>
        <ul>
          <li>Natural language processing (NLP)</li>
          <li>Machine learning (ML)</li>
        </ul>

        <h2>Professional Use Cases:</h2>
        <ul>
          <li>Stay up-to-date on industry trends</li>
          <li>Learn new skills</li>
          <li>Prepare for meetings</li>
          <li>Create educational content</li>
          <li>Generate marketing copy</li>
          <li>Write blog posts</li>
        </ul>

      <div className="floating-icons">
        {/* You can add floating icons or elements here */}
      </div>
    </div>
    </div>
  );
};

export default About;
