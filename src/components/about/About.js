import React from "react";

import snsData from "../../data/sns.json";

// import aboutImg from "./aboutme.svg";
import aboutBg from "./aboutbg.svg";
import avatar from "./avatar.svg";
import deskImg from "./desk.svg";

import "./About.css";

const About = () => {
  const snsArr = snsData.snsArr;

  return (
    <div className="about-me">
      <div className="about-images reveal">
        <div
          className="about-images-bg"
          style={{ backgroundImage: `url(${aboutBg})` }}
        ></div>
        <div
          className="desk-img"
          style={{ backgroundImage: `url(${deskImg})` }}
        ></div>
        <div className="avatar-bg">
          <img src={avatar} alt="" />
        </div>
      </div>
      <div className="about-text">
        <div className="name">Jungwon (Jade) Han</div>
        <div className="txt">
          <div className="txt-1">About me</div>
          <div className="txt-2">
            <p>
              I have over 3 years of work experience as a frontend developer and a
              bachelor's degree in Computer Science. 
              I'm passionate about learning state-of-the-art technologies and constantly improving
              my skills. 
            </p>
            <p>Find me on social media</p>
          </div>
        </div>
        <div className="about-sns">
          {snsArr.map(
            (sns) =>
              sns.visible && (
                <a href={sns.url} key={sns.id} target="_blank" rel="noreferrer">
                  <div className="sns-oval">
                    <img src={sns.iconUrl} alt={sns.name} />
                  </div>
                </a>
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default About;
