import React from 'react';
import './Portofolio.css';
import IMG1 from '../../assets/port1.jpg';
import IMG2 from '../../assets/portfolio2.jpg';
import IMG3 from '../../assets/portfolio3.jpg'

const data = [
  {
    id : 1,
    image : IMG1,
    title : "Wedding Web Invitation",
    github : 'https://github.com',
    demo : 'https://firaandboby.netlify.app/'
  },
  {
    id : 2,
    image : IMG2,
    title : "Coming Soon",
    github : 'https://github.com',
    demo : 'https://github.com'
  },
  {
    id : 3,
    image : IMG3,
    title : "Coming Soon",
    github : 'https://github.com',
    demo : 'https://github.com'
  }
]

const Portofolio = () => {
  return (
    <section id='portofolio'>
      <h5>My Recent Work</h5>
      <h2>Portofolio</h2>
      <div className="container portofolio_container"> 
          {
            data.map (({id, image, title, github, demo}) => {
              return (
                <article key={id} className="portofolio_item">
                <div className="portofolio_item-image">
                  <img src={image} alt={title} />
                </div>
                <h3></h3>
                <div className="portofolio_item-cta">
                  <a href={github} className='btn'>Github</a>
                  <a href={demo} className='btn btn-primary'>Github</a>
                </div>
              </article>
              )
            }
          )
        } 
      </div>
    </section>
  )
}

export default Portofolio