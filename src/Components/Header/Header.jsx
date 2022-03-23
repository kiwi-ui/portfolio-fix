import React from 'react'
import './Header.css'
import CTA from './CTA'
const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I am</h5>
        <h1>Yusni Anggara</h1>
        <h5 className="text light">Front-end Developer</h5>
        <CTA />
      </div>  
    </header>
  )
}

export default Header