import React from "react";

import "./Project.css";

const Project = ({ type, title, demoUrl, imgUrl, status }) => {
  return (
    <div
      className={`my-project-container ${status === "scheduled" ? "deactivated" : ""}`}
      onClick={demoUrl ? () => window.open(demoUrl, "_blank") : null}
    >
      <div className="my-project" style={{ backgroundImage: `url(${imgUrl})` }}>
        <div className="type">{type}</div>
        {status === "in development" && (
          <div className="in-dev">(In development)</div>
        )}
        <div className="title">
          {title}
        </div>
      </div>
    </div>
  );
};

export default Project;
