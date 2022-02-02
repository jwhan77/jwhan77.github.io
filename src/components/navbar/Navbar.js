import React from "react";

import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <nav>
        <ul>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#work">Work</a>
          </li>
        </ul>
      </nav>
      <div>
        <button className="contact-btn">
          <a href="#contact">Contact</a>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
