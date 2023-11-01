// SummaryDetails.js
import React from "react";
import "./SummaryDetails.css";
const SummaryDetails = ({ selectedSummary }) => {
  return (
    <div className="summary-details">
      {selectedSummary ? (
        <div>
          <h3>{selectedSummary.title}</h3>
          <p>{selectedSummary.description}</p>
          {/* Add more details here */}
        </div>
      ) : (
        <div>Select a video to see the summary.</div>
      )}
    </div>
  );
};

export default SummaryDetails;
