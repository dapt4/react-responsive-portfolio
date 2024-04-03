import React from "react";
import "./styles/Contact.scss";
import img from "./assets/terminal.png";

export default function Contact() {
  return (
    <section className="contact">
      <h1 className="display-4 mb-3">
        <span> Contacto</span>
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
          https://www.linkedin.com/in/diegoperozotroncone
        </span>
      </div>
      <div>
        <i className="fas fa-mobile"></i>
        {" "}
        <span>
          Enviame un email para enviarte el numero de telefono.
        </span>
      </div>
      <div>
        <a
          className="btn btn-primary mt-5"
          href="https://docs.google.com/document/d/13ANQIPMBus0ArM1SW6rzM8B4tk6erZiDHWZlxN7hQ7Q/edit?usp=sharing">
          Download CV
        </a>
      </div>

      <img className="img-fluid" src={img} alt="img" />
    </section>
  );
}
