import React from 'react';
import './Portofolio.css';
import IMG1 from '../../assets/port1.jpg';

const Portofolio = () => {
  return (
    <section id='portofolio'>
<h5>My Recent Work</h5>
<h2>Portofolio</h2>
<div className="container portofolio_container">
  <article className="portofolio_item">
    <div className="portofolio_item-image">
    <img src={IMG1} alt="" />
    </div>
      <h3></h3>
      <a href="https://github.com" className='btn'>Github</a>
      <a href="https://github.com" className='btn btn-primary'>Github</a>
  </article>
</div>
    </section>
  )
}

export default Portofolio