import React from 'react'
import './About.css'
import {ME} from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
const About = () => {
  return (
    <section id="about">
      <h5>Go To Know</h5>
      <h2>About Me</h2>

      <div className="container abobut_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src="" alt="" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className='about_card'>
                <FaAward className='about_icon'/>
                <h5>Experience</h5>
                <small>1+ years Working</small>
            </article>

            <article className='about_card'>
                <FaAward className='about_icon'/>
                <h5>Experience</h5>
                <small>1+ years Working</small>
            </article>

            <article className='about_card'>
                <FaAward className='about_icon'/>
                <h5>Experience</h5>
                <small>1+ years Working</small>
            </article>
          </div>
        </div>

      </div>

    </section>
  )
}

export default About