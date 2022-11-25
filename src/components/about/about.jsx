import React from 'react'
import './about.css' 
import ME from '../../assests/me-about.png'
import {FiAward} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

 
const about = () => {
  return (
    <section id='about'>
      <h5>Get To know</h5>
      <h2>About Me</h2>

      <div className='container about_container'>
        <div className='about_me'>
          <div className='about_me-image'>
            <img src={ME} alt='About Image'/>
          </div>
        </div>
        <div className='about_content'>
          <div className='about_cards'>
            <article className='about_card'>
              <FiAward className='about_icon'/>
              <h5>Experience</h5>
              <small>3+ year</small>
            </article>

            <article className='about_card'>
              <VscFolderLibrary className='about_icon'/>
              <h5>Clients</h5>
              <small>300+</small>
            </article>

            <article className='about_card'>
              <FiAward className='about_icon'/>
              <h5>Projects</h5>
              <small>80+</small>
            </article>
            </div>
            <p >I am a student at Concordia University with a major in Computer Science. My goal is to get a job in the Information Technology field after graduating. I enjoy solving technical problems, researching and developing new technologies, and designing software applications for different platforms. I enjoy meeting people and working with them in a team environment. I also enjoy interacting with clients and customers. I am a quick learner with a fun, outgoing personality. In addition, I excel in my ability to work under pressure and handle stressful situations very well. These skills that I have will be a benefit to any information technology company.</p>
            <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default about