import React from 'react';
import './About.css';
import MO from '../../assets/me-about.jpg';
import {FaAward} from 'react-icons/fa';
import {FiUsers} from 'react-icons/fi';
import {VscFolderLibrary} from 'react-icons/vsc';

const About = () => {
  return (
    <section id="about">
      <h5>Go To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={MO} alt="about-image"/>
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className='about_card'>
                <FaAward className='about_icon'/>
                <h5>Experience</h5>
                <small>almost 1 years Working</small>
            </article>

            <article className='about_card'>
                <FiUsers className='about_icon' />
                <h5>Clients</h5>
                <small>1+ clients</small>
            </article>

            <article className='about_card'>
                <VscFolderLibrary className='about_icon'/>
                <h5>Projects</h5>
                <small>Wedding Website Completed</small>
            </article>
          </div>

          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex tempore corporis cumque minima omnis! Dignissimos exercitationem cum quia adipisci iste consequuntur velit! Aperiam fuga eos provident molestias, commodi beatae dolorum.</p>
          <a href="#contact" className='btn btn-primary'>Let's talk</a>
        </div>

      </div>

    </section>
  )
}

export default About