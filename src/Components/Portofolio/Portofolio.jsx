import React from 'react';
import './Portofolio.css';
import IMG1 from '../../assets/porto1.PNG';
import IMG2 from '../../assets/porto2.PNG';
import IMG3 from '../../assets/porto3.png';
import IMG4 from '../../assets/porto4.png';
import IMG5 from '../../assets/vue.jpg'

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
    demo : 'https://ws-backoffice.netlify.app/'
  },
  {
    id : 4,
    image : IMG4,
    title : "Company Profile",
    demo : 'https://compro-lavn.netlify.app'
  },
  {
    id : 5,
    image : IMG5,
    title : "Vue Project",
    demo : 'https://finaltask-ecommerce.web.app'
  }
]

const Portofolio = () => {
  return (
    <section id='portofolio'>
      <div className='title text-center'>
        <h5>My Recent Work</h5>
        <h2>Portofolio</h2>
      </div>

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