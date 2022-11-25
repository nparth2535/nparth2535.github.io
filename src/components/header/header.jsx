import React from 'react'
import './header.css' 
import CTA from './CTA.jsx'
import ME from '../../assests/Profile.png'
import HeaderSocial from './headerSocial'

const header = () => {
  return (
   <header>
    <div className="container header_container">
      <h1>Parth Navsariwala</h1>
      <h5 className="text-light">Software Developer</h5>
      <CTA/>
      <HeaderSocial/>
      <div className="me">
        <img src={ME} alt="me"/>
      </div>
      <a href='#contact' className='scroll_down'>Scroll Down</a>
    </div>
   </header>
  )
}

export default header