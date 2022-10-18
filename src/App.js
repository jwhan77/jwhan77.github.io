import React, { useEffect } from "react";

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Work from "./components/Work/Work";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

import "./App.css";

function App() {
  useEffect(() => {
    let lastScrollTop = 0;
    let header = document.getElementById("header");
    let container = document.getElementById("container");
    container.addEventListener("scroll", () => {
      const hideHeader = () => {
        let scrollTop = window.pageYOffset || container.scrollTop;
        if (scrollTop > lastScrollTop) {
          header.style.top = "-80px";
        } else {
          header.style.top = "0";
        }
        lastScrollTop = scrollTop;
      };

      const revealElement = () => {
        let reveals = document.querySelectorAll(".reveal");

        for (let i = 0; i < reveals.length; i++) {
          let windowHeight = window.innerHeight;
          let elementTop = reveals[i].getBoundingClientRect().top;
          let elementVisible = 150;

          if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
          } else {
            reveals[i].classList.remove("active");
          }
        }
      };
      hideHeader();
      revealElement();
    });
  }, []);

  return (
    <div className="App">
      <Header />
      <main id="container">
        <section className="intro" id="intro">
          <Main />
        </section>
        <section className="about" id="about">
          <About />
        </section>
        <section className="work" id="work">
          <Work />
        </section>
        <section className="experience" id="experience">
          <Experience />
        </section>
        <section className="contact" id="contact">
          <Contact />
        </section>
        <Footer />
      </main>
    </div>
  );
}

export default App;
