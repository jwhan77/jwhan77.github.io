import React from "react";

import "./Navbar.css";

const Navbar = () => {
  const scrollToElement = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  const scrollToElementMobile = (id) => {
    handleToggle();
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  const handleToggle = () => {
    document.getElementById("menu-icon").classList.toggle("change");
    document.getElementById("mobile-navbar").classList.toggle("show");
  };
  return (
    <>
      <div className="navbar">
        <nav>
          <ul>
            <li>
              <span onClick={() => scrollToElement("about")}>About</span>
            </li>
            <li>
              <span onClick={() => scrollToElement("work")}>Projects</span>
            </li>
            <li>
              <span onClick={() => scrollToElement("experience")}>Skills</span>
            </li>
          </ul>
          <div>
            <a href="https://jwdevv.tistory.com/" target="_blank" rel="noreferrer">
              <button className="button-transparent contact-btn">
                <span>Blog</span>
              </button>
            </a>
          </div>
        </nav>
      </div>
      <div className="menu-icon" id="menu-icon" onClick={handleToggle}>
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
      <div className="mobile-navbar" id="mobile-navbar">
        <nav>
          <ul>
            <li onClick={() => scrollToElementMobile("about")}>
              <span>About</span>
            </li>
            <li onClick={() => scrollToElementMobile("work")}>
              <span>Projects</span>
            </li>
            <li onClick={() => scrollToElementMobile("experience")}>
              <span>Skills</span>
            </li>
            <li onClick={() => scrollToElementMobile("contact")}>
              <span>Contact</span>
            </li>
            <a href="https://jwdevv.tistory.com/" target="_blank" rel="noreferrer">
              <li>
                  <span>Blog</span>
              </li>
            </a>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
