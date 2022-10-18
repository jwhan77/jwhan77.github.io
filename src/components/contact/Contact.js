import React from "react";

import "./Contact.css";
import Form from "../Form/Form";

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
          Hello there. I am currently looking for a new opportunity in Vancouver.
          If you are interested in working with me, please contact me.
          I will get back to you within 1-3 business days.
        </div>
        <div className="contact-information">
          {/* <div className="location">
            <div className="bg-oval">
              <img src={locationIcon} alt="" />
            </div>
            <span>South Korea</span>
          </div> */}
          {/* <div className="email">
            <div className="bg-oval">
              <img src={emailIcon} alt="" />
            </div>
            <span>jungwon.hannnnn@gmail.com</span>
          </div> */}
          <a href="https://www.linkedin.com/in/jungwonhan/" target="_blank" rel="noreferrer">
            <div className="linkedin">
              <div className="bg-oval">
                <img src="/assets/icons/linkedin.svg" alt="linkedin" />
              </div>
              <span>My LinkedIn Profile</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
