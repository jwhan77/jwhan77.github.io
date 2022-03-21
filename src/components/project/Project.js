import React from "react";

import "./Project.css";

const Project = ({ type, title, demoUrl, imgUrl, deactivated }) => {
  return (
    <div
      className={`my-project-container ${deactivated ? "deactivated" : ""}`}
      onClick={deactivated ? null : () => window.open(demoUrl, "_blank")}
    >
      <div className="my-project" style={{ backgroundImage: `url(${imgUrl})` }}>
        <div className="type">{type}</div>
        <div className="title">{title}</div>
      </div>
    </div>
  );
};

export default Project;
