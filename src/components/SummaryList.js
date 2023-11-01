// SummaryList.js
import React from "react";
// Import CSS and customize styles as needed

const SummaryList = ({ onSummaryClick }) => {
  const userSummaries = [
    /* Replace this with your actual summary data */
  ];

  return (
    <div className="summary-list">
      <h2>Summary</h2>
      <ul>
        {userSummaries.map((summary) => (
          <li key={summary.id} onClick={() => onSummaryClick(summary)}>
            {summary.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SummaryList;
