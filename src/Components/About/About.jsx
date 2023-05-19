import React from 'react';
import './About.css';
import MO from '../../assets/bebas2.png';
import {VscFolderLibrary} from 'react-icons/vsc';

const About = () => {
  return (
    <section id="about">
      <h2 className='title'>About Me</h2>

      <div className="container about_container">
        <div className="about_content">
          <div className="about_cards">
            <article className='about_card'>
              <VscFolderLibrary className='about_icon'/>
              <h5>Projects</h5>
              <small>Wedding Website Invitation, Backoffice Website Application and Company Profile</small>
            </article>
          </div>
        </div>
      </div>

    </section>
  )
}

export default About