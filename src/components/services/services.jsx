import React from 'react'
import './services.css' 
import {BiCheck} from 'react-icons/bi'
import {BiCheckShield} from 'react-icons/bi'

const services = () => {
  return (
    <section id='service'>
      <h5>Professional Background</h5>
      <h2>My Experience</h2>

      <div className="container services_container">
        <article className='service'>
           <div className="service_head">
            <h2>Tenacious Techies</h2>
            <h5>Software Developer (Nov 2019 – Jul 2020)</h5>
           </div>
           <ul className='service_list'>
            <li>
              <BiCheck className='service_list-icon'></BiCheck>
              <p>Apply the best technique to guarantee that the design complies with performance, usability, reliability, and scalability
standards in order to translate business needs into applications.</p>
            </li>

            <li>
              <BiCheck className='service_list-icon'></BiCheck>
              <p>Unit-test code for robustness, including edge cases, usability, and general reliability</p>
            </li>

            <li>
              <BiCheck className='service_list-icon'></BiCheck>
              <p>Work along with the others on the team to create applications in a timely manner</p>
            </li>

            <li>
              <BiCheck className='service_list-icon'></BiCheck>
              <p>Engage in routine design and code reviews with other members of the development team to verify the application of best
practises.</p>
            </li>

            <li>
              <BiCheck className='service_list-icon'></BiCheck>
              <p>Prioritize and schedule tasks for development in order to successfully achieve project and product development objectives
on time and within budget.</p>
            </li>

            <li>
              <BiCheck className='service_list-icon'></BiCheck>
              <p>Eliminate outdated code, fix a bug, and apply new solutions for a client application</p>
            </li>

           </ul>
        </article>


        <article className='service'>
           <div className="service_head">
            <h2>Harismurti Infotech</h2>
            <h5>Software Developer (May 2019 – Jul 2019)</h5>
           </div>
           <ul className='service_list'>
            <li>
              <BiCheck className='service_list-icon'></BiCheck>
              <p>Maintain existing software systems by detecting and addressing software bugs.</p>
            </li>

            <li>
              <BiCheck className='service_list-icon'></BiCheck>
              <p>Contribute to the agile development lifecycle high performance by making sure that each sprint is productive, reliable,
and successful by striving to eliminate team blocking difficulties.</p>
            </li>

            <li>
              <BiCheck className='service_list-icon'></BiCheck>
              <p> Create new and expand existing operational documentation based on industry best practises and internationally
recognised software development standards.</p>
            </li>
           </ul>
        </article>
      </div>
    </section>
  )
}

export default services