import React from 'react'
import './ContactSection.css'
import {Link} from 'react-router-dom'
import '../mediaqueries.css' 

function ContactSection() {
  return (
    <section id="contact">
    <p class="section__text">Get in Touch</p>
    <h1 class="section__title">Contact Me</h1>
    <div class="contact-info-container">
      <div class="contact-info-container__inner-container">
      <i class=" fa-lg fa-solid fa-envelope"></i>
        <p><Link className='link' to="mailto:examplemail@gmail.com">amj92@cornell.edu</Link></p>
      </div>
      <div class="contact-info-container__inner-container">
      <i class=" fa-lg fa-brands fa-linkedin"></i>
        <p><Link className='link' to="https://www.linkedin.com">LinkedIn</Link></p>
      </div>
    </div>
  </section>
  )
}

export default ContactSection