import React from "react";
import "./styles/Contact.scss";
import img from "./assets/terminal.png";

export default function Contact() {
  return (
    <section className="contact">
      <h1 className="display-4 mb-3">
        <span> Contact</span>
      </h1>
      <div>
        <i className="fas fa-envelope"></i>
        <span> diegodapt18@gmail.com</span>
      </div>
      <div>
        <i className="fab fa-github"></i>
        <span> https://github.com/dapt4</span>
      </div>
      <div>
        <i className="fab fa-linkedin"></i>
        <span>
          {" "}
          https://www.linkedin.com/in/diego-antonio-perozo-troncone-563893b9/
        </span>
      </div>
      <div>
        <i className="fas fa-mobile"></i>
        {" "}
        <span>
          send me an email for the phone number
        </span>
      </div>
      <div>
        <a
          className="btn btn-primary mt-5"
          href="https://docs.google.com/document/d/e/2PACX-1vTeppLR98BF8ImlyI5tg_-Km5mLLmpe-FifeJv219KjK2DUf2R00aLsm0nCfGwthhxDEMJbPPaDarHn/pub"
        >
          Download CV
        </a>
      </div>

      <img className="img-fluid" src={img} alt="img" />
    </section>
  );
}
