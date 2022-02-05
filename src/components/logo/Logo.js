import React from "react";

import "./Logo.css";
import polygon2x from "./polygon2x.svg";
import polygon from "./polygon-1_2x.svg";

const Logo = () => {
  return (
    <div
      className="logo"
      onClick={() =>
        document.getElementById("intro").scrollIntoView({ behavior: "smooth" })
      }
    >
      <div
        className="polygon-bg"
        style={{ backgroundImage: `url(${polygon2x})` }}
      >
        <img className="polygon" src={polygon} alt="" />
      </div>
    </div>
  );
};

export default Logo;
