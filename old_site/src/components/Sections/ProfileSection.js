import React from 'react'
import {Button} from '../Button';
import './ProfileSection.css'
import me from '../images/abigail.png'
import { Link } from 'react-router-dom';
import '../mediaqueries.css' 

function ProfileSection() {
  return (
    <section id="profile">
    <div className="pic-container">
      <img className="pic-container__img" src = {me}/>
    </div>
    <div className="text-container">
      <p className="text-container__p1">Hello, I'm</p>
      <h1 className="text-container__title">Abigail Joseph</h1>
      <p className="text-container__p2">Computer Science student at Cornell University</p>
      <div className="btn-container">
        {/* <Button className="btn-info" buttonStyle= 'btn-outline' onClick="window.open('./assets/resume-example.pdf')">
          Download CV
        </Button> */}

        {/* <Button className="btn-info" buttonStyle = "btn-filled" onClick=" /#contact'">
          Contact Info
        </Button> */}
      </div>
      <div id="socials-container">
        <Link to={'https://github.com/AbigailJoseph'} className='socials-container__icons'>
        <i className="fa-brands fa-github fa-2x"></i>
        </Link>
        <Link to={'https://www.linkedin.com/in/abigail-joseph-098b76284/'} className='socials-container__icons'>
        <i className="fa-brands fa-linkedin fa-2x"/>
        </Link>
        <Link to={"mailto:amj92@cornell.edu"} className='socials-container__icons'>
        <i class=" fa-regular fa-envelope-open fa-2x"/>
        </Link>
     </div>
    </div>
  </section>
  );
}

export default ProfileSection