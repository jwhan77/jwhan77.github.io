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
          <p>Frontend web developer</p>
          <p>based in Korea</p>
        </div>
        <div className="txt-2">
          Developing a website is my passion. I enjoy turning various ideas into
          reality. Have a great idea but need help? Send me a message and let's
          chat.
        </div>
        <div
          className="button-orange"
          onClick={() => scrollToElement("contact")}
        >
          Contact
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
