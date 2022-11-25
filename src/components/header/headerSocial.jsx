import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const headerSocial = () => {
  return (
    <div className='header_socials'>
        <a href='https://www.linkedin.com/in/nparth2535/' target="_blank"><BsLinkedin/></a>
        <a href='https://github.com/nparth2535' target="_blank"><FaGithub/></a>
    </div>
  )
}  

export default headerSocial