import React from "react";

import "./Navbar.css";

const Navbar = () => {
  const scrollToElement = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="navbar">
      <nav>
        <ul>
          <li>
            <span onClick={() => scrollToElement("about")}>About</span>
          </li>
          <li>
            <span onClick={() => scrollToElement("experience")}>
              Experience
            </span>
          </li>
          <li>
            <span onClick={() => scrollToElement("work")}>Work</span>
          </li>
        </ul>
      </nav>
      <div>
        <button className="contact-btn">
          <span onClick={() => scrollToElement("contact")}>Contact</span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
