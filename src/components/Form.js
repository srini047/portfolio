import "./Form.css";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { AiFillRightCircle } from "react-icons/ai";

const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_p37k27", // Service ID
        "template_p37k27", // Template ID
        form.current,
        "4x5-6c2l5jd105FhJ" // User ID
      )
      .then(
        () => {
          alert("Thanks for reaching out!! I'll get back to you shortly!");
        },
        (error) => {
          console.log("EmailJS Error:", error);
          alert(`Oops, ${error.text || error.message}. Please try again.`);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" required="true" />
      <label>Email</label>
      <input type="email" name="user_email" required="true" />
      <label>Message</label>
      <textarea name="message" required="true" />
      {/* <input type="submit" value="Send" /> */}
      <button className="btn">
        Submit <AiFillRightCircle size={20} />
      </button>
    </form>
  );
};

export default Form;
