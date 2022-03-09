import React from 'react'
import './contact.css'
import{AiOutlineMail} from 'react-icons/ai'
import{RiMessengerLine} from 'react-icons/ri'
import{BsWhatsapp} from 'react-icons/bs'
import {useRef} from 'react';
import emailjs from 'emailjs-com'


function Contact() {
  const form=useRef();

  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_rk4g6ji', 'template_9l272kd', form.current, 'uKhqVxf-OwriVELHa')
      e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Us</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <AiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>anannyaagrawal2001@gmail.com</h5>
            <a href='mailto:anannyaagrawal2001@gmail.com' target="_blank" rel="noreferrer">Send a message</a>
            </article>

          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Anannya Agrawal</h5>
            <a href='https://facebook.com' target="_blank" rel="noreferrer">Send a message</a>
            </article>

          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+918650805850</h5>
            <a href='https://api.whatsapp.com/send?phone=8650805850' target="_blank" rel="noreferrer">Send a message</a>
            </article>
          </div>
          {/* End of Contact Section  */}
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name='name' placeholder='Your Full Name' required/>
            <input type="email" name='email' placeholder='Your Email' required/>
            <textarea name='message' rows="7" placeholder='Your Message' required/>
            <button type='submit' className='btn btn-primary'>Send Message</button>
            </form>

        </div>
    </section>
  )
}

export default Contact