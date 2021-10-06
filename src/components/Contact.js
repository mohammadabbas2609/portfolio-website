import { useRef, useState } from "react";
import Divider from "./Divider";
import "../styles/contact.css";

const Contact = () => {
  const arrowRef = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function animatedForm(e) {
    if (e.target.className === "arrow") {
      const input = e.target.previousElementSibling;
      const parent = e.target.parentElement;
      const nextForm = parent.nextElementSibling;
      if (parent.className.includes("active-field")) {
        if (input.type === "text" && validateUser(input)) {
          nextSlide(parent, nextForm);
        } else if (
          input.type === "email" &&
          input.value.match(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/)
        ) {
          nextSlide(parent, nextForm);
        } else {
          parent.style.backgroundColor = "rgb(189,87,87)";
          parent.style.animation = "shake 0.5s ease";
          input.style.color = "rgb(255,255,255)";
        }
      }
    }

    if (name && message && email) {
      console.log("All form filled");
    }
  }

  function validateUser(user) {
    if (user.value.length < 2) {
      return false;
    } else {
      return true;
    }
  }

  function nextSlide(parent, nextForm) {
    parent.classList.remove("active-field");
    parent.classList.add("inactive-field");
    nextForm.classList.add("active-field");
  }

  return (
    <div className="contact" id="contact">
      <Divider
        color="#eee"
        position={{ top: "0px", left: "0px" }}
        height="113px"
      />
      <div className="contact-me container">
        <h3>Connect with me</h3>
        <div className="contact-form">
          <form ref={arrowRef} onClick={animatedForm}>
            <div className="field-name active-field">
              <img src="/contact-form-images/user.png" alt="user" />
              <input
                type="text"
                placeholder="Your Name"
                onChange={e => {
                  setName(e.target.value);
                }}
                value={name}
                required
              />
              <img
                src="/contact-form-images/arrow.png"
                alt="user"
                className="arrow"
              />
            </div>
            <div className="field-mail inactive-field">
              <img src="/contact-form-images/mail.png" alt="mail" />
              <input
                type="email"
                onChange={e => {
                  setEmail(e.target.value);
                }}
                value={email}
                placeholder="Your Email"
                required
              />
              <img
                src="/contact-form-images/arrow.png"
                alt="arrow"
                className="arrow"
              />
            </div>
            <div className="field-question inactive-field">
              <img src="/contact-form-images/question.png" alt="ask-me" />
              <input
                type="text"
                onChange={e => {
                  setMessage(e.target.value);
                }}
                placeholder="Your Message"
                value={message}
                required
              />
              <img
                className="arrow"
                src="/contact-form-images/arrow.png"
                alt="arrow"
                type="submit"
              />
            </div>
            <div className="field-finish inactive-field">
              <img src="/contact-form-images/heart.png" alt="heart" />
              <p>Will get back to you soooon !</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
