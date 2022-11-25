import React from 'react'
import './testimonial.css' 
import AVTR1 from '../../assests/certi1.PNG'
import AVTR2 from '../../assests/certi2.PNG'
import AVTR3 from '../../assests/avatar3.jpg'
import AVTR4 from '../../assests/avatar4.jpg'

// import Swiper core and required modules
import {Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/pagination';


const testimonial = () => {
  return (
    <section id='testimonial'>
      <h5>Certification & Achievements</h5>
      <h2>Certifications</h2>

      

      <Swiper className='container testimonials_container'
      
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide className='testimonial'>
          <div className="client_avtar">
            <img src={AVTR1} alt="CERTIFICATE 1"></img>
          </div>
          <h5 className='client_name'>NPTEL - Python for Data Science</h5>
          <small className='client_review'><a href='https://archive.nptel.ac.in/content/noc/NOC20/SEM1/Ecertificates/106/noc20-cs36/Assignment/Certificates/NPTEL20CS36S1PC362927.jpg' target='_blank'>View</a></small>
        </SwiperSlide>

        <SwiperSlide className='testimonial'>
          <div className="client_avtar">
            <img src={AVTR2} alt="CERTIFICATE 2"></img>
          </div>
          <h5 className='client_name'>NPTEL - Joy Of Python</h5>
          <small className='client_review'><a href='https://archive.nptel.ac.in/content/noc/NOC18/SEM2/Ecertificates/106/noc18-cs35/Course/NPTEL18CS35S210701361810105893.jpg' target='_blank'>View</a></small>
        </SwiperSlide>

      </Swiper>
    </section>
  )
}

export default testimonial