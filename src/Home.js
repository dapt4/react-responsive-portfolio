import React from 'react'
import img from './assets/terminal.png'

export default function Home(){
  return (
    <section className="p-5">
      <span className="display-6 text-light">Hola, soy Diego Perozo y Soy un</span>
      <h1 className="display-1 text-light">Frontend Developer</h1>
      <h2 className="col-md-6 text-light opacity-50">
        Mi stack favorito es react, typescript, redux, sass y mas.</h2>
    <a 
      className="btn btn-primary"
      href="https://docs.google.com/document/d/13ANQIPMBus0ArM1SW6rzM8B4tk6erZiDHWZlxN7hQ7Q/edit?usp=sharing">
      Download CV
    </a>
    <div>
      <img className="img-fluid" src={img} alt="img"/>
    </div>
    </section>
  )
}
