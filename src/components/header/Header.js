import React from "react";
import Logo from "../Logo/Logo";
import Navbar from "../Navbar/Navbar";

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
