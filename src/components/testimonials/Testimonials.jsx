import React from 'react'
import './testimonials.css'
import avatar1 from '../../assets/myimg1.jpeg'
import avatar2 from '../../assets/myimg1.jpeg'
import avatar3 from '../../assets/myimg1.jpeg'
import avatar4 from '../../assets/myimg1.jpeg'
// import Swiper core and required modules
import {Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
  image: avatar1,
  name : "Anjali Srivastava",
  review : `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo sunt, aliquam sapiente 
              distinctio, itaque suscipit velit quidem placeat magnam laboriosam cumque soluta, nihil veritatis repellendus veniam modi 
              quos totam voluptatibus?`
  },
  {
  image: avatar2,
  name : "Vijeta Msihra",
  review : `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo sunt, aliquam sapiente 
  distinctio, itaque suscipit velit quidem placeat magnam laboriosam cumque soluta, nihil veritatis repellendus veniam modi 
  quos totam voluptatibus?`
  },
  {
  image: avatar3,
  name : "Latika Saini",
  review : `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo sunt, aliquam sapiente 
  distinctio, itaque suscipit velit quidem placeat magnam laboriosam cumque soluta, nihil veritatis repellendus veniam modi 
  quos totam voluptatibus?`
  },
  {
  image: avatar4,
  name : "Sandali Bansal",
  review : `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo sunt, aliquam sapiente 
  distinctio, itaque suscipit velit quidem placeat magnam laboriosam cumque soluta, nihil veritatis repellendus veniam modi 
  quos totam voluptatibus?`
  }
  ]

const Testimonials = () => {
  return (
    <section id='testinomials'>
      <h5>Review From Cilents</h5>
      <h2>Testinomials</h2>
      <Swiper className="container testinomials__container"
        // install Swiper modules
        modules={[ Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {
          data.map(({image,name,review},index)=>{
            return(
              <SwiperSlide key={index} className="testinomial">
          <div className="client__avatar">
            <img src={image} alt="" />
            </div>
            <h5 className='clients__name'>{name}</h5>
            <small className="clients__review">{review}</small>
          </SwiperSlide>
            )
          })
        }
      
        </Swiper>
    </section>
  )
}

export default Testimonials