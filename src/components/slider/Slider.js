import React, { useState, useEffect } from "react";

import "./Slider.css";

const Slider = () => {
  const [liClassList, setLiClassList] = useState(["slider-item"]);
  const [items, setItems] = useState(["1", "2", "3", "4", "5", "6"]);

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
    <div className="main">
      <div className="slider-container">
        <div className="slider">
          <ul>
            <li className={liClassList.join(" ")} id="#1">
              1
            </li>
            <li className={liClassList.join(" ")} id="#2">
              2
            </li>
            <li className={liClassList.join(" ")} id="#3">
              3
            </li>
            <li className={liClassList.join(" ")} id="#4">
              4
            </li>
            <li className={liClassList.join(" ")} id="#5">
              5
            </li>
            <li className={liClassList.join(" ")} id="#6">
              6
            </li>
          </ul>
          <div className="slider-nav">
            <div className="prev" onClick={handlePrev}></div>
            <div className="next" onClick={handleNext}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
