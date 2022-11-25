import React from 'react'
import './experience.css' 
import {BsPatchCheckFill} from 'react-icons/bs'

const experience = () => {
  return (
    <section id='experience'>
      <h5>Educational Background</h5>
      <h2>My Education</h2>

      <div className='container experience_container'>
        <div className='experience_frontend'>
        <h3>CONCORDIA UNIVERSITY, MONTREAL, CA</h3>
        
          <div className='experience_content'>
          <article className='experience_details'>
            <BsPatchCheckFill className='experience_details-icon'/>
            <div>
            <h4>MASTER OF APPLIED COMPUTER SCIENCE</h4>
            </div>
            </article>

            <article className='experience_details'>
            <BsPatchCheckFill className='experience_details-icon'/>
            <div>
            <h4>Jan 2021 - Dec 2022</h4>
            </div>
            </article>

            <article className='experience_details'>
            <BsPatchCheckFill className='experience_details-icon'/>
            <div>
            <h4>GPA</h4>
            <small className='text-light'>Score of graduation is 3.50 out of 4.30 GPA.</small>
            </div>
            </article>
          </div>

        </div>
        <div className='experience_backend'>
        <h3>CHAROTAR UNIVERSITY OF SCIENCE AND TECHNOLOGY, ANAND, INDIA</h3>
        
        
          <div className='experience_content'>
          <article className='experience_details'>
            <BsPatchCheckFill className='experience_details-icon'/>
            <div>
            <h4>BACHELOR OF TECHNOLOGY IN INFORMATION TECHNOLOGY</h4>
            </div>
            
            </article>
            <article className='experience_details'>
            <BsPatchCheckFill className='experience_details-icon'/>
            <div>
            <h4>Jun 2016 - Apr 2020</h4>
            </div>
            
            </article>

            <article className='experience_details'>
            <BsPatchCheckFill className='experience_details-icon'/>
            <div>
            <h4>GPA</h4>
            <small className='text-light'>Score of graduation is 9.35 out of 10.00 GPA.</small>
            </div>
            </article>

          </div>
        </div>
      </div>
    </section>
  )
}

export default experience