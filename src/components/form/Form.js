import React from "react";
import { useForm, ValidationError } from "@formspree/react";

import emailImg from "./email.svg";

import "./Form.css";

const Form = () => {
  const [state, handleSubmit] = useForm("xjvlyebb");

  return (
    <>
      <div className={`submitted ${state.succeeded ? "active" : ""}`}>
        <img src={emailImg} alt="" />
        Thanks for contacting me!
      </div>
      {!state.succeeded && (
        <form onSubmit={handleSubmit} className="reveal">
          <div className="txt-1">Get in touch</div>
          <div>
            <label htmlFor="email"></label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Your email"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div>
            <textarea id="message" name="message" placeholder="Message" />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <div className="submit">
            <button
              className="button-orange"
              type="submit"
              disabled={state.submitting}
            >
              SUBMIT NOW
            </button>
          </div>
        </form>
      )}
    </>
  );
  // if (state.succeeded) {
};

export default Form;
