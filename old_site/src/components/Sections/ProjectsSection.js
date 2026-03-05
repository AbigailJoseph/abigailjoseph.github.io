import React from 'react'
import CardItem from '../CardItem'
import cogo from '../images/cogo.png'
import infostream from '../images/infostream.png'
import './ProjectsSection.css'
import '../mediaqueries.css' 

function ProjectsSection() {
  return (
    <section id='projects'>
        <p class="projects__p1">Browse My Recent</p>
        <h1 class="projects__title">Projects</h1>
        <div className='projects-container'>
        <CardItem
            src={infostream}
            title='InfoStream'
            link1='https://github.com/AbigailJoseph/InfoStream-v2'
            link2='https://youtu.be/BGvSkE0tjrQ'
            btnLabel1='GitHub'
            btnLabel2='Demo'
            info='News agrregator website built with React and Firebase'
        />
        <CardItem
            src={cogo}
            title='Cogo'
            link1='https://github.com/AbigailJoseph/cogo-public'
            link2='https://apps.apple.com/us/app/cogo-group-habit-tracker/id1631623887'
            btnLabel1='GitHub'
            btnLabel2='Demo'
            info='iOS collaborative habit tracker built in Swift'
        />
        </div>
    </section>
  )
}

export default ProjectsSection