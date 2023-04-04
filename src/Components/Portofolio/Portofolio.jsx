import React from 'react';
import './Portofolio.css';
import IMG1 from '../../assets/porto1.PNG';
import IMG2 from '../../assets/porto2.PNG';
import IMG3 from '../../assets/porto3.png';
import IMG4 from '../../assets/porto4.png';

const data = [
  {
    id : 1,
    image : IMG1,
    title : "Wedding Web Invitation",
    demo : 'https://firaandboby.netlify.app/'
  },
  {
    id : 2,
    image : IMG2,
    title : "Wedding Web Invitation",
    demo : 'https://syafiqaandgeraldy.netlify.app/'
  },
  {
    id : 3,
    image : IMG3,
    title : "Workshop BackOffice",
    demo : 'https://https://ws-backoffice.netlify.app/'
  },
  {
    id : 4,
    image : IMG4,
    title : "Company Profile",
    demo : 'https://compro-lavn.netlify.app'
  }
  
]

const Portofolio = () => {
  return (
    <section id='portofolio'>
      <h5>My Recent Work</h5>
      <h2>Portofolio</h2>

      <div className="container portofolio_container"> 
        {
          data.map (({id, image, title, demo}) => {
            return (
              <article key={id} className="portofolio_item">
                <div className="portofolio_item-image">
                    <a href={demo}>
                      <img src={image} alt={title}/>
                    </a>
                </div>
              </article>
            )
          })
        } 
      </div>
    </section>
  )
}

export default Portofolio