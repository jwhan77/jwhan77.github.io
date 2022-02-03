import React from "react";

import locationIcon from "./location.svg";
import emailIcon from "./email.svg";

import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-me">
      <div className="get-in-touch">Get in touch</div>
      <div className="contact-me-txt">
        <div className="title">CONTACT</div>
        <div className="txt-1">Contact Me</div>
        <div className="txt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
        <div className="contact-information">
          <div className="location">
            <div className="bg-oval">
              <img src={locationIcon} alt="" />
            </div>
            <span>South Korea</span>
          </div>
          <div className="email">
            <div className="bg-oval">
              <img src={emailIcon} alt="" />
            </div>
            <span>gksjeongw96@gmail.com</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
