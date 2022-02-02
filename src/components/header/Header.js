import React from "react";
import Logo from "../logo/Logo";
import Navbar from "../navbar/Navbar";

import wave from "./wave.svg";

import "./Header.css";

const Header = () => {
  return (
    <header id="header">
      <Logo />
      <Navbar />
    </header>
  );
};

export default Header;
