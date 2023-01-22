import "./Form.css";
import React from "react";
import { AiFillRightCircle } from "react-icons/ai";

const Form = () => {
  return (
    <div className="form">
      <form>
        <label>Your Name</label>
        <input type="text"></input>
        <label>Email</label>
        <input type="email"></input>
        <label>Subject</label>
        <input type="text"></input>
        <label>Message </label>
        <textarea rows="6" placeholder="Type your message here..."></textarea>
        <button className="btn">
          Submit <AiFillRightCircle size={20} />
        </button>
      </form>
    </div>
  );
};

export default Form;
