import React from "react";

import Slider from "../slider/Slider";

import "./Work.css";

const Work = () => {
  return (
    <div className="latest-work">
      <div className="name">PORTFOLIO</div>
      <div className="work-title">
        <div className="txt-1">Latest Work</div>
        <div>
          <button className="button-transparent">
            <span>EXPLORE MORE</span>
          </button>
        </div>
      </div>
      <div className="content">
        <Slider />
      </div>
    </div>
  );
};

export default Work;
