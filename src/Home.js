import React from 'react'
import img from './assets/terminal.png'

export default function Home(){
  return (
    <section className="p-5">
      <span className="display-6 text-light">Hi, I'm Diego Perozo and I'm a</span>
      <h1 className="display-1 text-light">Fullstack Developer</h1>
      <h2 className="col-md-6 text-light opacity-50">
        I develop backend in python and django, in addition, I make user interfaces with Vue3, React, Angular, I also have a lot of creativity.</h2>
    <a 
      className="btn btn-primary"
      href="https://docs.google.com/document/d/1enpdSvc24pWojXVWcw1NAIfQzU7u385FrxJ4I1_Yr2w/edit?usp=sharing">
      Download CV
    </a>
    <div>
      <img className="img-fluid" src={img} alt="img"/>
    </div>
    </section>
  )
}
