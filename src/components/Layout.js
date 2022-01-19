import React from 'react'
import Header from './Header'
import '../styles/Layout.scss'

export default function Layout(props){
  return(
    <div className="layout">
      <Header/>
      {props.children}
    </div>
  )
}
