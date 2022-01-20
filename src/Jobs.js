import React from "react";
import Plants from "./assets/plants.jpg";
import Shopping from "./assets/shopping.jpg";
import nortesAppImg from "./assets/notesApp.png";
import taskApp from "./assets/tasksApp.png";
import fastapi from "./assets/fastapi.jpeg";
import passmanager from "./assets/passmanager.png";
import wedding from "./assets/wedding.png";
import teamManager from "./assets/teamManager.png";
import reactPortfolio from "./assets/react-responsive-portfolio.png";
import djangoPorfolio from "./assets/djangoPortfolio.png";
import allStoreApi from "./assets/all-store-api.png";
import "./styles/Jobs.scss";

export default function Jobs() {
  const jobsArray = [
    {
      title: "app.qampo.es",
      image: Plants,
      link: "https://app.qampo.es",
      description:
        "I have created a frontend from scratch for the use of more than 1700 users around the world.",
    },
    {
      title: "hellosabi.com",
      image: Shopping,
      link: "https://hellosabi.com",
      description:
        "Develop a webapp with React, TSX, webpack, sass, BEM, Atomic design, function components, react-router-dom.",
    },
  ];
  const projectsArray = [
    {
      title: "NotesApp",
      image: nortesAppImg,
      link: "https:/github.com/dapt4/notesApp",
      description:
        "An app for make notes, with login, users, routing, in mongodb node express handlebars.",
    },
    {
      title: "TasksApp",
      image: taskApp,
      link: "https://github.com/dapt4/taskApp-nextjs-postgresql-TS",
      description: "A task application with nextjs, typescript, postgresql.",
    },
    {
      title: "Fastapi crud",
      image: fastapi,
      link: "https://github.com/dapt4/FastAPI-mongodb-python-crud",
      description: "A simple api created with fastapi, mongodb and python.",
    },
    {
      title: "Wedding invitation",
      image: wedding,
      link: "https://dapt4.github.io/nuestraBoda/",
      description:
        "A wedding invitation frontend maked in html5, css, javascript and whatsapp api.",
    },
    {
      title: "Team Manager",
      image: teamManager,
      link: "https://github.com/dapt4/team-manager",
      description:
        "A react aplication with redux, fetching the players for an external api, and dispose of them in fields.",
    },
    {
      title: "React responsive portfolio",
      image: reactPortfolio,
      link: "https://github.com/dapt4/react-responsive-portfolio",
      description:
        "This portfolio is made created with react, bootstrap, sass, and design skills.",
    },
    {
      title: "Django Portfolio",
      image: djangoPorfolio,
      link: "https://github.com/dapt4/django-portfolio-sqlite",
      description: "A django portfolio maked with sqlite.",
    },
    {
      title: "Java api",
      image: allStoreApi,
      link: "https://all-store-api.herokuapp.com/stores",
      description:
        "A api aplication made created with java, spring boot, postgresql, and heroku.",
    },
    {
      title: "PassManager",
      image: passmanager,
      link: "https://passmanager1.herokuapp.com/",
      description:
        "A nodejs application maked with express, mongodb atlas and handlebars.",
    },
  ];
  return (
    <section className="jobs">
      <h1 className="text-light">My Experience</h1>
      <h4 className="text-secondary">
        I have had the pleasure of working in two large companies to contribute
        all my skills and grow with them.
        <br />
        <br />
        <p>
          You can see more projects in my{" "}
          <a className="text-light" href="https://github.com/dapt4">
            Github
          </a>
        </p>
      </h4>
      <div className="cards">
        {jobsArray.map((job) => (
          <div className="card" style={{ width: "18rem" }}>
            <div class="img-box">
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
      <h1 className="text-light mt-5">My personal projects</h1>
      <div className="personal-projects">
        {projectsArray.map((project) => (
          <div className="card" style={{ width: "18rem" }}>
            <div class="img-box">
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
