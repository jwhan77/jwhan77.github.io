import React, { useEffect } from "react";

import pic from "./pic.svg";

import htmlIcon from "./icons/html5.svg";
import cssIcon from "./icons/css3.svg";
import jsIcon from "./icons/javascript.svg";
import gitIcon from "./icons/git.svg";
import reactIcon from "./icons/react.svg";
import sassIcon from "./icons/sass.svg";
import bootstrapIcon from "./icons/bootstrap.svg";
import tailwindIcon from "./icons/tailwindcss.svg";
import nextIcon from "./icons/nextdotjs.svg";
import tsIcon from "./icons/typescript.svg";
import pyIcon from "./icons/python.svg";
import flaskIcon from "./icons/flask.svg";

import "./Experience.css";

const skillList = [
  { skill: "HTML", img: htmlIcon },
  { skill: "CSS", img: cssIcon },
  { skill: "JavaScript", img: jsIcon },
  { skill: "Git", img: gitIcon },
  { skill: "React", img: reactIcon },
  { skill: "Sass", img: sassIcon },
  { skill: "Bootstrap", img: bootstrapIcon },
  { skill: "Tailwind CSS", img: tailwindIcon },
  { skill: "Next.js", img: nextIcon },
  { skill: "TypeScript", img: tsIcon },
  { skill: "Python", img: pyIcon },
  { skill: "Flask", img: flaskIcon },
];

const orangeBG = [0, 2, 5, 7, 8, 10];

const Experience = () => {
  useEffect(() => {
    let container = document.getElementById("container");
    container.addEventListener("scroll", () => {
      const revealElementFromTop = () => {
        let reveals = document.querySelectorAll(".reveal-top");

        let windowHeight = window.innerHeight;
        let skillSectionTop = document
          .getElementById("experience")
          .getBoundingClientRect().top;
        let elementVisible = 300;

        if (skillSectionTop < windowHeight - elementVisible) {
          let index = 0;
          let revealInterval = setInterval(() => {
            reveals[index].classList.add("active");
            index++;
            if (index >= reveals.length) {
              clearInterval(revealInterval);
            }
          }, 100);
        } else {
          for (let i = 0; i < reveals.length; i++) {
            reveals[i].classList.remove("active");
          }
        }
      };
      revealElementFromTop();
    });
  }, []);

  return (
    <div className="skills-container">
      <div className="skills-img-div">
        <img src={pic} alt="" />
      </div>
      <div className="skills-content">
        <div>
          <div className="title">SKILLS</div>
          <div className="txt-1">SKILLS</div>
          <div className="skills">
            {skillList.map((skill, i) => (
              <MySkill
                key={i}
                skill={skill.skill}
                img={skill.img}
                // className={orangeBG.indexOf(i) !== -1 ? "orange-bg" : "white-bg"}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const MySkill = ({ skill, img, ...props }) => {
  return (
    <div className="skill reveal-top">
      <img src={img} alt="" />
      <div className="bg">{skill}</div>
    </div>
  );
};
export default Experience;
