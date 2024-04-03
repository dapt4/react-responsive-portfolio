import React from "react";
import "./styles/Skills.scss";

export default function Skills() {
  return (
    <section className="skills">
      <h3>Mis Conocimientos</h3>
      <h6 className="h4 col-md-6">
        Tengo fuertes Conocimientos en: 

        React, Redux, Javascript, typescript, css, Sass (Scss), html, 
        Ecma Script 6 (ES6),  responsive design, consumo de APIs (REST API), 
        BEM, SCRUM, testing jest / vitest, debbuging.

        Postman, Figma, Vite, webpack, Nodejs, Express, python, django, 
        Git, Npm, Eslint, Prettier, React developer tools, Vscode, Neovim, Terminal.
        Axios, Styled components, React router, Redux toolkit, React Bootstrap, 
        Bulma css, Lodash, React leaflet.js (mapas), highcharts (gráficas).
        <br/>
        <br/>       
        <p>
          Uso vscode para el desarrollo, aveces me gusta usar Neovim. Puedo usar
          git desde la terminal, o desde sublime merge, he trabajado con github y 
          bitbucket.
          Mi sistema operativo favorito es GNU/Linux (Debian, Ubuntu), pero 
          puedo usar sin problema windows o macos.
        </p>
      </h6>
      <div className="tools col-md-6">
        <i class="fab fa-python"></i>
        <img src="/react-responsive-portfolio/django.svg" alt="django"/>
        <i class="fab fa-node-js"></i>
        <i class="fab fa-npm"></i>
        <i class="fab fa-js"></i>
        <i class="fab fa-sass"></i>
        <i class="fab fa-bootstrap"></i>
        <i class="fab fa-react"></i>
        <i class="fab fa-git-alt"></i>
        <i class="fab fa-github"></i>
        <i class="fab fa-html5"></i>
        <i class="fab fa-css3"></i>
        <i class="fab fa-slack"></i>
        <i class="fab fa-stack-overflow"></i>
        <i class="fab fa-ubuntu"></i>
      </div>
    </section>
  );
}
