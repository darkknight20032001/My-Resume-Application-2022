import React from "react";
import { MyContacts } from "../myDatabase/myDatabase2";
import Form from "./Form";
import "./ContactMe.css";
const ContactMe = () => {
  return (
    <>
      <div className="SocialMedia">
        {MyContacts.map((contact, id) => {
          return (
            <div className="MyContacts" key={id}>
              <img src={contact.ContactLogo} width="50px" alt="hi" />
              <span>{contact.ContactName}</span>
            </div>
          );
        })}
      </div>
      <Form />
    </>
  );
};

export default ContactMe;
