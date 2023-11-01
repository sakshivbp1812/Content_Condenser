// VideoSearch.js
import React, { useState } from "react";
import './VideoSearch.css'; // Import the CSS file for styling

const VideoSearch = () => {
  const [videoUrl, setVideoUrl] = useState("");

  const handleSearch = () => {
    // Implement video search logic here
  };

  return (
    <div className="video-search">
      <input
        type="text"
        placeholder="Enter YouTube video URL"
        value={videoUrl}
        onChange={(e) => setVideoUrl(e.target.value)}
        className="search-input" // Add a class for styling
      />
      <button onClick={handleSearch} className="search-button">Summarize</button>
    </div>
  );
};

export default VideoSearch;
