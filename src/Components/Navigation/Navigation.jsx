import React from 'react'
import './Navigation.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageSquareDetail} from 'react-icons/bi'
import { useState } from 'react'

const Navigation = () => {
  const [activeNav, setActiveNav] = useState(null)
  
  const isActive = (active) => {
    setActiveNav(active)
  }

  return (
    <nav>
        <a href="#" onClick={ () => isActive('header') } className={`${ activeNav === 'header' ? 'active' : '' }`}><AiOutlineHome /></a>
        <a href="#about" onClick={ () => isActive('about') } className={`${ activeNav === 'about' ? 'active' : '' }`}><AiOutlineUser /></a>
        <a href="#experience" onClick={ () => isActive('experience') } className={`${ activeNav === 'experience' ? 'active' : '' }`}><BiBook /></a>
        <a href="#contact" onClick={ () => isActive('contact') } className={`${ activeNav == 'contact' ? 'active' : '' }`}><BiMessageSquareDetail /></a>
    </nav>
  )
}

export default Navigation