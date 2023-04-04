import React from 'react';
import './Contact.css';
import {MdOutlineEmail} from 'react-icons/md';
// import {RiMessengerLine} from 'react-icons/ri';
import {BsWhatsapp} from 'react-icons/bs';
const Contact = () => {
  return (
    <section id="contact">
      <h5>Get in touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <div>
              <h4>Email</h4>
              <h5>yusnianggara@gmail.com</h5>
              <a href="mailto:yusnianggara@gmail.com">Send Message</a>
            </div>
          </article>

          <article className="contact_option">
            <h4>Linkedin</h4>
            <h5>Yusni Anggara</h5>
            <a href="https://www.linkedin.com/in/yusni-anggara-92a70b152/">Visit Profile</a>
          </article>
        </div>

        <form action="">
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact