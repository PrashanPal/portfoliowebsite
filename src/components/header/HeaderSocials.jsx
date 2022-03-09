import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {FaDribbbleSquare} from 'react-icons/fa'
const HeaderSocials = () => {
    // npm i react-icons--is already done here
  return (
    <div className="header__socials">
        <a href="https:linkedin.com" target="_blank"><BsLinkedin/></a>
        <a href="https:github.com" target="_blank"><BsGithub/></a>
        <a href="https:dribble.com" target="_blank"><FaDribbbleSquare/></a>
    </div>
  )
}

export default HeaderSocials
