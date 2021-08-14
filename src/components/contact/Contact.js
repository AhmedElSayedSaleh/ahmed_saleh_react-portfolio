import React, { useState } from "react";
import emailjs from "emailjs-com";
import ContactImg from "../../assets/shake.svg";

import "./contact.scss";

function Contact() {
  const [successMessage, setSuccessMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_gq5bi7u",
        "template_bccywdj",
        e.target,
        "user_tUMC58sQ6r1vtInpLtK5w"
      )
      .then(
        (res) => {
          console.log("SUCCESS!", res.status);
          setSuccessMessage(true);
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
  };
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src={ContactImg} alt="" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form name="contact" onSubmit={handleSubmit} method="POST">
          <input type="text" placeholder="Name" name="user_name" required />
          <input type="email" placeholder="Email" name="user_email" required />
          <textarea placeholder="Message" name="message" required />
          <button type="submit" value="Send">
            Send
          </button>
          {successMessage && <span>Thank,s I'll reply ASAP :)</span>}
        </form>
      </div>
    </div>
  );
}

export default Contact;
