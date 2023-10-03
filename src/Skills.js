import React from "react";
import "./styles/Skills.scss";

export default function Skills() {
  return (
    <section className="skills">
      <h3>My Skills</h3>
      <h6 className="h4 col-md-6">
        I have a strong knowledge in: javascript, css, html, vue3, Python, Django,
        sql, react, typescript, angular, flask, fastapi, restful APIs, 
        token-based sessions. I always work with responsive web design in mind, 
        and I enjoy using SASS to preprocess my CSS. 

        I write client-side applications (CSR), server-side rendering (SSR), and 
        I have used leaflet.js to create interactive maps and highcharts to make 
        Charts.
        <br/>
        <br/>       
        <p>
          I use Neovim to write my code and work with agile methodologies like 
          Scrum. I use Sublime Merge or the command-line GIT for version control, 
          and I utilize platforms like GitHub and Bitbucket. 

          My favorite operating system is GNU/Linux (Debian, Ubuntu), 
          and I use the terminal for everything.
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
        <i class="fab fa-vuejs"></i>
        <i class="fab fa-react"></i>
        <i class="fab fa-angular"></i>
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
