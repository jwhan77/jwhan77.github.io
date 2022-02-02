import React, { useEffect } from "react";

import Header from "./components/header/Header";
import Main from "./components/main/Main";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Work from "./components/work/Work";
import Contact from "./components/contact/Contact";

import "./App.css";

function App() {
  useEffect(() => {
    let lastScrollTop = 0;
    let header = document.getElementById("header");
    let container = document.getElementById("container");
    container.addEventListener("scroll", () => {
      let scrollTop = window.pageYOffset || container.scrollTop;
      if (scrollTop > lastScrollTop) {
        header.style.top = "-80px";
      } else {
        header.style.top = "0";
      }
      lastScrollTop = scrollTop;
    });
  }, []);

  return (
    <div className="App">
      <div className="container" id="container">
        <Header />

        <section className="intro" id="intro">
          <Main />
        </section>
        <section className="about" id="about">
          <About />
        </section>
        <section className="experience" id="experience">
          <Experience />
        </section>
        <section className="work" id="work">
          <Work />
        </section>
        <section className="contact" id="contact">
          <Contact />
        </section>
      </div>
    </div>
  );
}

export default App;
