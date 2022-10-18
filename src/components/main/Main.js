import React from "react";

import webdev from "./undraw_proud_coder_re_exuy.svg";

import "./Main.css";

const Main = () => {
  const scrollToElement = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="main">
      <div className="main-intro">
        <div className="name">Jungwon Han</div>
        <div className="txt-1">
          <p>Frontend Web Developer</p>
        </div>
        <div className="txt-2">
          Frontend Engineer who is proficient in React, JavaScript, HTML and CSS. <br/><br/>
          Web development is my passion. I enjoy turning various idea into reality. <br/>
          I'm looking for a new opportunity in Vancouver, Canada.
        </div>
        <div
          className="button-orange"
          onClick={() => scrollToElement("contact")}
        >
          Contact Me
        </div>
      </div>
      <div className="main-images">
        <div className="bg-oval"></div>
        <img src={webdev} alt="" className="developer" />
      </div>
    </section>
  );
};

export default Main;
