import React from 'react'
import img from './assets/terminal.png'

export default function Home(){
  return (
    <section className="p-5">
      <span className="display-6 text-light">Hi, I'm Diego Perozo and I'm a</span>
      <h1 className="display-1 text-light">Fullstack Developer</h1>
      <h2 className="col-md-6 text-light opacity-50">
        I develop backend in python and java, also, I make user interfaces with React and typescriptr, I also have a lot of creativity.</h2>
      <a className="btn btn-primary" href="https://docs.google.com/document/d/e/2PACX-1vTeppLR98BF8ImlyI5tg_-Km5mLLmpe-FifeJv219KjK2DUf2R00aLsm0nCfGwthhxDEMJbPPaDarHn/pub">Download CV</a>
    <div>
      <img className="img-fluid" src={img} alt="img"/>
    </div>
    </section>
  )
}
