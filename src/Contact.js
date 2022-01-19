import React from 'react';
import './styles/Contact.scss'
import img from './assets/terminal.png'

export default function Contact(){
  return(
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
        <span> https://www.linkedin.com/in/diego-antonio-perozo-troncone-563893b9/</span>
      </div>
      <div>
        <a className="btn btn-primary mt-5" href="https://docs.google.com/document/d/1R-nprOIt_fgjLMcpDocfyFVeeRw33qFewRqdsFQrli4/edit?usp=sharing">Download CV</a>
      </div>

      <img className="img-fluid" src={img} alt="img"/>
    </section>
  )
}
