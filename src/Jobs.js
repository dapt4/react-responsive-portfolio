import React from "react";
import { Card, Button } from "react-bootstrap";
import Plants from "./assets/plants.jpg";
import Shopping from "./assets/shopping.jpg";
import "./styles/Jobs.scss";

export default function Jobs() {
  return (
    <section className="jobs col-md-6">
      <h1 className="text-light">My Experience</h1>
      <h4 className="text-secondary">
        I have had the pleasure of working in two large companies to contribute
    all my skills and grow with them. 
    <br/>
    <br/> 
    <p> 
      You can see more projects in my <a className="text-light" href="https://github.com/dapt4">Github</a>
    </p>
      </h4>
      <div className="cards">
        <div className="card" style={{ width: "18rem" }}>
          <img src={Plants} className="card-img-top" alt="plants" />
          <div className="card-body">
            <h5 className="card-title">app.qampo.es</h5>
            <p className="card-text">
              I have created a frontend from scratch for the use of more than
              1700 users around the world.
            </p>
            <a href="https://app.qampo.es" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
        <div className="card" style={{ width: "18rem" }}>
          <img src={Shopping} className="card-img-top" alt="Shopping" />
          <div className="card-body">
            <h5 className="card-title">hellosabi.com</h5>
            <p className="card-text">
              Develop a webapp with React, TSX, webpack, sass, BEM, Atomic
              design, function components, react-router-dom.
            </p>
            <a href="https://hellosabi.com" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
