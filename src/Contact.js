import React from "react";
import "./styles/Contact.scss";
import img from "./assets/terminal.png";

export default function Contact() {
  return (
    <section class="contact">
      <h1 className="display-4 mb-3">
        <span> Contact</span>
      </h1>
      <div>
        <i class="fas fa-envelope"></i>
        <span> diegodapt18@gmail.com</span>
      </div>
      <div>
        <i class="fab fa-github"></i>
        <span> https://github.com/dapt4</span>
      </div>
      <div>
        <i class="fab fa-linkedin"></i>
        <span>
          {" "}
          https://www.linkedin.com/in/diego-antonio-perozo-troncone-563893b9/
        </span>
      </div>
      <div>
        <a
          className="btn btn-primary mt-5"
          href="https://drive.google.com/file/d/10JY2ObMEkO1asZ2FwFu7jDm4nMCH09Ly/view?usp=sharing"
        >
          Download CV
        </a>
      </div>

      <img className="img-fluid" src={img} alt="img" />
    </section>
  );
}
