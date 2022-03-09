import React from 'react'
import './portfolio.css'
import img1 from '../../assets/myimg1.jpeg'
import img2 from '../../assets/myimg1.jpeg'
import img3 from '../../assets/myimg1.jpeg'
import img4 from '../../assets/myimg1.jpeg'
import img5 from '../../assets/myimg1.jpeg'
import img6 from '../../assets/myimg1.jpeg'

const data = [
  {
  id : 1,
  image: img1,
  title: "Eclipse - Figma dashboard UI kit for data design web apps",
  github: 'https://github.com',
  demo : 'https://dribbble.com/shots/17610643-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps'
  },
  {
  id : 2,
  image: img2,
  title: "Orion UI kit - Charts templates & infographics in Figma",
  github: 'https://github.com',
  demo : 'https://dribbble.com/shots/17428309-Orion-UI-kit-Charts-templates-infographics-in-Figma'
  },
  {
  id : 3,
  image: img3,
  title: "Eclipse - Figma dashboard UI kit for data design web apps",
  github: 'https://github.com',
  demo : 'https://dribbble.com/shots/17341613-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps'
  },
  {
  id : 4,
  image: img4,
  title: "Orion UI kit - Charts templates & infographics in Figma",
  github: 'https://github.com',
  demo : 'https://dribbble.com/shots/17096585-Orion-UI-kit-Charts-templates-infographics-in-Figma'
  },
  {
  id : 5,
  image: img5,
  title: "Orion UI kit - Charts templates & infographics in Figma",
  github: 'https://github.com',
  demo : 'https://dribbble.com/shots/17557610-Orion-UI-kit-Charts-templates-infographics-in-Figma'
  },
  {
  id : 6,
  image: img6,
  title: "Orion UI kit - Charts templates & infographics in Figma",
  github: 'https://github.com',
  demo : 'https://dribbble.com/shots/17341601-Orion-UI-kit-Charts-templates-infographics-in-Figma'
  }
  ]



const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>PortFolio</h2>

      <div className="container portfolio__container">

        {
          data.map(({id,image,title,github,demo}) =>{
            return(
              <article key={id} className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={image} alt={title} />
            <h3>{title}</h3>
           <div className="portfolio__item-cta">
           <a href={github} className='btn' target="_blank" rel="noreferrer">GitHub </a>
            <a href={demo} className='btn btn-primary' target="_blank" rel="noreferrer">Live Demo</a>
             </div>
          </div>
        </article>
            )
          })
        }
        
      </div>
    </section>
  )
}

export default Portfolio