// // SummariesPage.js
// import React, { useState } from "react";
// import SummaryDetails from "./SummaryDetails";
// import "./SummariesPage.css";

// const SummariesPage = ({ userSummaries }) => {
//   const [selectedSummary, setSelectedSummary] = useState(null);

//   const handleSummaryClick = (summary) => {
//     setSelectedSummary(summary);
//   };

//   return (
//     <div className="summaries-page">
//       <div className="summaries-list">
//         <h2>Your Video Summaries</h2>
//         <ul>
//           {userSummaries.map((summary) => (
//             <li key={summary.id} onClick={() => handleSummaryClick(summary)}>
//               {summary.title}
//             </li>
//           ))}
//         </ul>
//       </div>
//       <SummaryDetails selectedSummary={selectedSummary} />
//     </div>
//   );
// };

// export default SummariesPage;4
// SummariesPage.js
// SummariesPage.js
import React, { useState } from "react";
import logo from "./youtube.png"; 
import SummaryDetails from "./SummaryDetails";
import SummaryList from "./SummaryList";
import "./SummariesPage.css"; // Import the CSS file for styling

const SummariesPage = () => {
  const [userSummaries, setUserSummaries] = useState([
    { id: 1, title: "Summary 1", description: "Description for Summary 1" },
    { id: 2, title: "Summary 2", description: "Description for Summary 2" },
    { id: 3, title: "Summary 3", description: "Description for Summary 3" },
    { id: 4, title: "Summary 4", description: "Description for Summary 4" },
    { id: 5, title: "Summary 5", description: "Description for Summary 5" },
    { id: 6, title: "Summary 6", description: "Description for Summary 6" },
    { id: 7, title: "Summary 7", description: "Description for Summary 7" },
    { id: 8, title: "Summary 8", description: "Description for Summary 8" },
    { id: 9, title: "Summary 9", description: "Description for Summary 9" },
    { id: 2, title: "Summary 2", description: "Description for Summary 2" },
    { id: 3, title: "Summary 3", description: "Description for Summary 3" },
    { id: 4, title: "Summary 4", description: "Description for Summary 4" },
    { id: 5, title: "Summary 5", description: "Description for Summary 5" },
    { id: 6, title: "Summary 6", description: "Description for Summary 6" },
    { id: 7, title: "Summary 7", description: "Description for Summary 7" },
  
  ]);

  const [selectedSummary, setSelectedSummary] = useState(null);

  const handleSummaryClick = (summary) => {
    setSelectedSummary(summary);
  };

  return (
    <div className="summaries-page">
      <div className="top-right">
        <a href="/">Home</a>
      </div>
      <div className="left-top">
      <img src={logo} alt="YouTube Logo" className="logo" />
      </div>
      <h1 className="heading">Past Summaries</h1>
      <div className="summary-container">
        <div className="sidebar">
          <h2>Your Video Summaries</h2>
          <ul>
            {userSummaries.map((summary) => (
              <li key={summary.id} onClick={() => handleSummaryClick(summary)}>
                {summary.title}
              </li>
            ))}
          </ul>
        </div>
        <div className="summary-details">
          <SummaryList onSummaryClick={handleSummaryClick} />
          <SummaryDetails selectedSummary={selectedSummary} />
        </div>
      </div>
    </div>
  );
};

export default SummariesPage;
