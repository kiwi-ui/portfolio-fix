import React from 'react'
import './Experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'
const Experience = () => {
  return (
    <section id="experience">
    <h2>My Skill</h2>

    <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            <article className="experience_details">
                <BsPatchCheckFill />
                <div>
                    <h4>HTML</h4>
                    <small className='text-light'>Experienced</small>
                </div>
            </article>
            <article className="experience_details">
                <BsPatchCheckFill />
                
                <div>
                    <h4>CSS</h4>
                    <small className='text-light'>Experienced</small>
                </div>

            </article>
            <article className="experience_details">
                <BsPatchCheckFill />
                <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>Experienced</small>
                </div>
            </article>
            <article className="experience_details">
                <BsPatchCheckFill />
            <div>
              
                <h4>Tailwind</h4>
                <small className='text-light'>Experienced</small>
            
            </div>    
            </article>
            <article className="experience_details">
                <BsPatchCheckFill />
            
            <div>
                <h4>React</h4>
                <small className='text-light'>Experienced</small>
            </div>
            
            </article>
          </div>
        </div>
    </div>
    
    <div className="experience_backend">

    </div>
    
    </section>
  )
}

export default Experience