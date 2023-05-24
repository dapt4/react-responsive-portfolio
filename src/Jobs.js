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
import githubLogo from "./assets/github.svg"
import "./styles/Jobs.scss";
// import {Link} from "react-router-dom";

export default function Jobs() {
  const jobsArray = [
    {
      title: "app.qampo.es",
      image: Plants,
      link: "https://app.qampo.es",
      description:
        "Fullstack developer",
    },
    {
      title: "hellosabi.com",
      image: Shopping,
      link: "https://hellosabi.com",
      description:
        "React Frontend Developer",
    },
  ];
  const projectsArray = [
    {
      title: "Imageserver app",
      image: githubLogo,
      link: "https://github.com/dapt4/imageserver-django-drf-postgres-auth-pillow-uuid0",
      description:
        "A image server app like aws s3 made created in django, django rest framework, postgresql, pillow, uuid0, python-dotenv",
    },
    {
      title: "passwordsmanager django",
      image: githubLogo,
      link: "https://github.com/dapt4/passwordsmanager-django-drf-postgres",
      description:
        "a passwords manager application with authentication made created with django, rest_framework, postdresql",
    },
    {
      title: "django tasksapp",
      image: githubLogo,
      link: "https://github.com/dapt4/django_drf_postgres_auth_tasksapp",
      description:
        "a tasksapp with authentication made created in django, djangorestframework, postgresql",
    },
    {
      title: "django musicapp ",
      image: githubLogo,
      link: "https://github.com/dapt4/django-drf-postgres-musicapp",
      description:
        "a music application made created with django, django_rest_framework, postgresql, python-env",
    },
    {
      title: "django booksapp",
      image: githubLogo,
      link: "https://github.com/dapt4/django-drf-postgres-booksapp",
      description:
        "a books application made created with django, django_rest_framework, postgresql",
    },
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
      <h1 className="text-light mt-5">My personal projects</h1>
      <br />
      <br />
      <p className="text-ight">
        You can see more projects in my{" "}
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
