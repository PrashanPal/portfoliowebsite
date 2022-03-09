import React from 'react'
import './about.css'
import aboutMe from '../../assets/myimg1.jpeg'
import {FaAward} from 'react-icons/fa'
import {HiUsers} from 'react-icons/hi'
import {RiFolderDownloadFill} from 'react-icons/ri'

function About() {
  return (
    <section id='about'>
       <h5>Get To Know</h5>
       <h2>About Me</h2>
       <div className="container about__container">
         <div className="about__me">
           <div className="about__me-image">
             <img src={aboutMe}  style={{"height":"23rem","width":"23rem"}} alt="" />
           </div>

         </div>
         <div className="about__content">
            <div className="about__cards">

              <article className='about__card'>
                <FaAward className='about__icon'/>
               <h5>Experience</h5>
               <small>3+ Year Working</small>
              </article>
              
              <article className='about__card'>
                <HiUsers className='about__icon'/>
               <h5>Clients</h5>
               <small>200+ Clients</small>
              </article>
              
              <article className='about__card'>
                <RiFolderDownloadFill className='about__icon'/>
               <h5>Projects</h5>
               <small>5 Projects</small>
              </article>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum veniam tempora facilis quaerat 
              id pariatur similique aperiam dolores nostrum impedit, earum at inventore optio voluptate itaque nam,
               perferendis eaque totam.</p>
               <a href='#contact' className='btn btn-primary'>Contact Us</a>
         </div>
       </div>
    </section>
      
      )
}

export default About