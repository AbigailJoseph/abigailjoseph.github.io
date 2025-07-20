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
              Abigail is currently a junior at Cornell University in the College of Engineering. She is majoring in Computer Science with a minor in Artificial Intelligence.
              Abigail is passionate about leveraging AI to support education and drive social good. She is an Undergraduate Researcher at the Cornell Future of Learning Lab. There, she designs robust evaluation 
              frameworks for AI Simulated Humans in education applications. She is on the Outreach Committe for the Cornell Chapter of the Society of Women Engineers(SWE) where she organizes STEM events for Girl Scout Cadette Troops. She is also the 
              Webmaster of Cornell SWE. Abigail has experience in AI and NLP(knowedge graphs, semantic reaosning, LLMs), Research and, FullStack Development.  
            </p>
          </div>
        </div>
    </div>
  {/* </div> */}
      
    </section>
  )
}

export default AboutSection