import React from 'react'
import './Navigation.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageSquareDetail} from 'react-icons/bi'
import { useState } from 'react'

const New = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
        <a href="#" className='active'><AiOutlineHome /></a>
        <a href="#about"><AiOutlineUser /></a>
        <a href="#experience"><BiBook /></a>
        <a href="#contact"><RiServiceLine /></a>
        <a href="#contact"><BiMessageSquareDetail /></a>

    </nav>
  )
}


const Navigation = () => {
  return (
    <nav>
        <a href="#" className='active'><AiOutlineHome /></a>
        <a href="#about"><AiOutlineUser /></a>
        <a href="#experience"><BiBook /></a>
        <a href="#contact"><RiServiceLine /></a>
        <a href="#contact"><BiMessageSquareDetail /></a>

    </nav>
  )
}

export default Navigation