import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get in touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <form className='form'>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
        </form>
        
        <div className='d-flex align-right '>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </div>
      </div>
    </section>
  )
}

export default Contact
