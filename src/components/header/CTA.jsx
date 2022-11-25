import React from 'react'
import CV from '../../assests/Parth_Tech_Resume.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Download Resume</a>
       {/* <a href="Contact" className='btn btn-primary'>Let's Talk</a>*/}

    </div>
  )
}
export default CTA