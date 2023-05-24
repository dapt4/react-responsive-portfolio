import React from "react";
import "./styles/Skills.scss";

export default function Skills() {
  return (
    <section className="skills">
      <h3>My Skills</h3>
      <h6 className="h4 col-md-6">
    I have solid knowledge in: javascript, css, html, java, spring mvc,
        sql, fullstack developer en Argotec Ingeniería, react, typescript,
        angular, python, django, flask, fastapi, Token based sessions.
        i work allways thinking in responsive web design, i like to use SASS
        for preprocess my css. i write apps client side
        rendering (CSR), server side rendering (SSR - JSP - ejs - handlebars),
        in the most of the cases i use Bootstrap for fast development, jquery,
        leaflet.js is the better tool for make interactive maps, highcharts for
        make graphic charts.
        <br/>
        <br/>       
        <p>
          I use VScode for write code, but i prefer nvim, i use sublime merge or
          comandline GIT, github, bitbucket, my favorite operating system is gnu/Linux 
          ( debian, ubuntu), and i use the term for everything.
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
