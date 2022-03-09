import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/myimg1.jpeg'
import HeaderSocials from './HeaderSocials'
const Header = () => {
  return (
     <header>
       <div className="container header__container">
         <h5>Hey Guys, it's me</h5>
        <CTA/>
        <HeaderSocials/>
        <div className="me" >
          <img src={ME} style={{"height":"35rem","width":"19rem"}} alt="" />
        </div>
        <a href="#contact" className='scroll__down'>Scroll Down</a>
       </div>
     </header>
  )
}

export default Header
