import "./Form.css";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { AiFillRightCircle } from "react-icons/ai";

const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(process.env.EMAILJS_SERVICE_ID)
    emailjs
      .sendForm(
        "service_p37k27",
        "template_p37k27",
        form.current,
        "4x5-6c2l5jd105FhJ"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="form">
      <form ref={form} onSubmit={sendEmail}>
        <label>Your Name</label>
        <input type="text"></input>
        <label>Your Email</label>
        <input type="email"></input>
        <label>Your Message to share</label>
        <textarea rows="6" placeholder="Type your message here..."></textarea>
        <button className="btn">
          Submit <AiFillRightCircle size={20} />
        </button>
      </form>
    </div>
  );
};

export default Form;
