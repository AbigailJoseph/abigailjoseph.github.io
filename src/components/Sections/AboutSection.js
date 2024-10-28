import React from 'react'
import pic1 from '../images/pic1.png'
import pic2 from '../images/pic2.png'
import pic3 from '../images/pic3.png'
import './AboutSection.css'
import '../mediaqueries.css' 


function AboutSection() {
  return (
    <section id="about">
      {/* <div className='container'> */}
      <p className="section__text">Get To Know More</p>
      <h1 className="section__title">About Me</h1>
    <div className='outer-container'>
        
    <div className="outer-container__inner-container">
        <div className="outer-container__pic-container">
          <img src={pic1} className="pic-container__about-pic" />
        </div>
        <div className="outer-container__pic-container">
          <img src={pic2} className="pic-container__about-pic" />
        </div>
        <div className="outer-container__pic-container">
          <img src={pic3} className="pic-container__about-pic" />
        </div>
    </div>

        <div className="about-details-container">
          <div className="text-container">
            <p>
              Abigail is currently a sophomore at Cornell University as a computer science major. She is a member of the Outreach
              Committe for the Cornell Chapter of the <strong className='bold'> Society of Women Engineers(SWE) </strong>. She is also a developer for Women at Computing at Cornell.
              Abigail has experience in both web and iOS development. She is proficient in <strong className='bold'>Javascript, HTML/CS, Swift, Java, and Python</strong>. Further she is skilled 
              in the following frameworks: <strong className='bold'> React, Node.js, Bootstrap, and Google Firebase </strong>.  
            </p>
          </div>
        </div>
    </div>
  {/* </div> */}
      
    </section>
  )
}

export default AboutSection