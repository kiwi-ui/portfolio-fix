import React from 'react';
import './Header.css';
import CTA from './CTA';
import ME from '../../assets/me_2.png';
import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
    <header>
      <div className="header_container">
        <div className='header-desc'>
          <h3>Hello I am</h3>
          <h1>Yusni Anggara</h1>
          <h3 className="text light">Frontend Web Developer</h3>
        </div>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="me" height={'100%'}/>
        </div>
        <a href='#contact' className='scroll_down'>Scroll Down</a>
      </div>  
    </header>
  )
}

export default Header
