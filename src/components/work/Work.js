import React from "react";

import Slider from "../Slider/Slider";

import "./Work.css";

const Work = () => {
  return (
    <div className="work-container">
      <div className="latest-work">
        <div className="name">PORTFOLIO</div>
        <div className="work-title">
          <div className="txt-1">Side Projects</div>
          <div>
            <a href="https://github.com/jwhan77" target="_blank" rel="noreferrer">
              <button className="button-transparent">
                <span>EXPLORE MORE</span>
              </button>
            </a>
          </div>
        </div>
        <div className="content">
          <Slider />
        </div>
      </div>
    </div>
  );
};

export default Work;
