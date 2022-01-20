import React from 'react'
import img from './assets/terminal.png'

export default function Home(){
  return (
    <section className="p-5">
      <span className="display-6 text-light">Hi, I'm Diego Perozo and I'm a</span>
      <h1 className="display-1 text-light">Fullstack Developer</h1>
      <h2 className="col-md-6 text-light opacity-50">
        I make user interfaces and application logic with javascript and react, as well as a lot of creativity.</h2>
      <a className="btn btn-primary" href="https://drive.google.com/file/d/10JY2ObMEkO1asZ2FwFu7jDm4nMCH09Ly/view?usp=sharing">Download CV</a>
    <div>
      <img className="img-fluid" src={img} alt="img"/>
    </div>
    </section>
  )
}
