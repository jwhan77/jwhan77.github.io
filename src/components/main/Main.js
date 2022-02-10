import React from "react";

import webdev from "./undraw_proud_coder_re_exuy.svg";

import "./Main.css";

const Main = () => {
  const scrollToElement = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="main">
      <div className="main-intro">
        <div className="name">Jungwon (Jade) Han</div>
        <div className="txt-1">
          <p>Front end developer</p>
          <p>based in Korea</p>
        </div>
        <div className="txt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
        <div
          className="button-orange"
          // onClick={() =>
          //   window.open(
          //     "https://drive.google.com/file/d/13pFg4E7UOV8sRYt7BubEp2K3Av-zIULs/view?usp=sharing",
          //     "_blank"
          //   )
          // }
        >
          Resume (PDF)
        </div>
      </div>
      <div className="main-images">
        <div className="bg-oval"></div>
        <img src={webdev} alt="" className="developer" />
      </div>
    </div>
  );
};

export default Main;
