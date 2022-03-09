import React from 'react'
import CV from '../../assets/cv168.pdf'
const CTA = () => {
  return (
    <div className="cta">
        {/* download is an attribute */}
        <a href={CV} download className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA
