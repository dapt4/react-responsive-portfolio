import React from "react";
import Plants from "./assets/plants.jpg";
import Shopping from "./assets/shopping.jpg";
import bank from "./assets/bank.jpg";
import { projectsArray } from './components/ProjectsArray.d.js';
import "./styles/Jobs.scss";

export default function Jobs() {
  const jobsArray = [
    {
      title: "app.qampo.es",
      image: Plants,
      link: "https://www.qampo.es",
      description:
        "Frontend developer",
    },
    {
      title: "hellosabi.com",
      image: Shopping,
      link: "https://hellosabi.com",
      description:
        "Frontend Developer",
    },
   {
      title: "ca-moncommerce.com",
      image: bank,
      link: "https://www.ca-moncommerce.com/",
      description:
        "Fullstack Developer",
    },
  ]; 
  return (
    <section className="jobs">
      <h1 className="text-light">Proyectos de Empresas</h1>
      <h4 className="text-secondary">
        He trabajado en tres proyectos empresariales.
      </h4>
      <div className="cards">
        {jobsArray.map((job, index) => (
          <div className="card" key={index} style={{ width: "18rem" }}>
            <div className="img-box">
              <img src={job.image} className="card-img-top" alt="plants" />
            </div>
            <div className="card-body">
              <h5 className="card-title">{job.title}</h5>
              <p className="card-text">{job.description}</p>
              <a href={job.link} className="btn btn-primary">
                Visit
              </a>
            </div>
          </div>
        ))}
      </div>
      <h1 className="text-light mt-5">Mis proyectos personales</h1>
      <br />
      <br />
      <p className="text-light">
        Puede ver mas proyectos en mi {" "}
        <a className="text-light" href="https://github.com/dapt4">
          Github
        </a>
      </p>
      <div className="personal-projects">
        {projectsArray.map((project, index) => (
          <div className="card" key={index} style={{ width: "18rem" }}>
            <div className="img-box">
              <img src={project.image} className="card-img-top" alt="plants" />
            </div>
            <div className="card-body">
              <h5 className="card-title">{project.title}</h5>
              <p className="card-text">{project.description}</p>
              <a href={project.link} className="btn btn-primary">
                Visit
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
