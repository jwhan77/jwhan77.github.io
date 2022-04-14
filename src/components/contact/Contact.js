import React from "react";

import locationIcon from "./location.svg";
import emailIcon from "./email.svg";

import "./Contact.css";
import Form from "../form/Form";

const Contact = () => {
  return (
    <div className="contact-me">
      <div className="get-in-touch">
        <Form />
      </div>
      <div className="contact-me-txt">
        <div className="title">CONTACT</div>
        <div className="txt-1">Contact Me</div>
        <div className="txt-2">
          Hello there. I am open for your ideas and questions. 
          I will get back to you within 3-5 business days.
        </div>
        <div className="contact-information">
          <div className="location">
            <div className="bg-oval">
              <img src={locationIcon} alt="" />
            </div>
            <span>South Korea</span>
          </div>
          {/* <div className="email">
            <div className="bg-oval">
              <img src={emailIcon} alt="" />
            </div>
            <span>jungwon.hannnnn@gmail.com</span>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Contact;
