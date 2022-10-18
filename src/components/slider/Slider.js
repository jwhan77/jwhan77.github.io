import React, { useState, useEffect } from "react";
import Project from "../Projects/Project";

import projects from "../../data/projects.json";

import "./Slider.css";

import arrowIcon from "./arrow.svg";

const Slider = () => {
  const [liClassList, setLiClassList] = useState(["slider-item"]);

  useEffect(() => {
    init();
  }, []);

  const resetPos = () => {
    setLiClassList(["slider-item"]);
  };

  const handlePrev = () => {
    setLiClassList([...liClassList, "transition", "right"]);

    setTimeout(() => {
      prev();
      resetPos();
    }, 300);
  };

  const handleNext = () => {
    setLiClassList([...liClassList, "transition", "left"]);

    setTimeout(() => {
      next();
      resetPos();
    }, 300);
  };

  const init = () => {
    const itemList = document.getElementsByClassName("slider-item");
    for (let index = 0; index < itemList.length; index++) {
      itemList[index].style.order = index; // pass
    }
  };

  const prev = () => {
    const sliderLength = projects.length;
    const itemList = document.getElementsByClassName("slider-item");
    for (let index = 0; index < itemList.length; index++) {
      let curPos = parseInt(itemList[index].style.order);
      if (curPos < sliderLength - 1) {
        itemList[index].style.order = curPos + 1;
      } else {
        curPos = 0;
        itemList[index].style.order = curPos;
      }
    }
  };

  const next = () => {
    const sliderLength = projects.length;
    const itemList = document.getElementsByClassName("slider-item");
    for (let index = 0; index < itemList.length; index++) {
      let curPos = parseInt(itemList[index].style.order);
      if (curPos > 0) {
        itemList[index].style.order = curPos - 1;
      } else {
        curPos = sliderLength - 1;
        itemList[index].style.order = curPos;
      }
    }
  };

  return (
    <div className="slider-main">
      <div className="slider-container">
        <div className="slider">
          <ul>
            {projects.map(project => (
              <li key={project.id} className={liClassList.join(" ")} id={`#${project.id}`}>
                <Project {...project} />
              </li>
            ))}
          </ul>
          <div className="slider-nav">
            <div className="prev" onClick={handlePrev}>
              <img src={arrowIcon} alt="" />
            </div>
            <div className="next" onClick={handleNext}>
              <img src={arrowIcon} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
