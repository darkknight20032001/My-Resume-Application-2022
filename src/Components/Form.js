import React from "react";
import "./Form.css";
const Form = () => {
  return (
    <div>
      <form>
        <input type="text" placeholder="Enter Your First Name" />
        <input type="text" placeholder="Enter Your Last Name" />
        <input type='email' placeholder="Enter Your Email" />

        <textarea type="text" placeholder="Enter Your Message" />
        <button className="Form" type="submit">
          +
        </button>
      </form>
    </div>
  );
};

export default Form;
