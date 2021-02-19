import React, { useState } from "react";
import Issue from "./Issue";
import "./Issues.css";
const Issues = () => {
  const [issues, setIssues] = useState([
    {
      id: 0,
      text: "progress bar when run 'npm run build'",
      isOpen: true,
      number: "#8672",
      badges: [
        {
          text: "issue:bug report",
          color: "orange",
        },
        {
          text: "issue:propasal",
          color: "yellow",
        },
      ],
    },
  ]);
  return (
    <div className="Issues">
      {issues.map((issue) => {
        return (
          <Issue
            key={issue.id}
            id={issue.id}
            text={issue.text}
            isOpen={issue.isOpen}
            number={issue.number}
            badges={issue.badges}
          />
        );
      })}
    </div>
  );
};

export default Issues;
