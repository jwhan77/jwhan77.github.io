import React, { useState, useEffect } from "react";
import Project from "../project/Project";

import "./Slider.css";

import img1 from "./img1.jpg";
import img2 from "./img2.jpg";
import img3 from "./img3.jpg";

import arrowIcon from "./arrow.svg";

const items = ["1", "2", "3"];

const Slider = ({ projects }) => {
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
    const sliderLength = items.length;
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
    const sliderLength = items.length;
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
            <li className={liClassList.join(" ")} id="#1">
              <Project type="Web" title="Portfolio" imgUrl={img1} />
            </li>
            <li className={liClassList.join(" ")} id="#2">
              <Project type="Web3" title="Coming soon..." imgUrl={img2} />
            </li>
            <li className={liClassList.join(" ")} id="#3">
              <Project type="Web3" title="Coming soon..." imgUrl={img3} />
            </li>
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
