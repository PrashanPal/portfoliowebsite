import React from 'react'
import { useState } from 'react';
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Footer from './components/footer/Footer'
import Experience from './components/experience/Experience'
import Portfolio from './components/portfolio/Portfolio'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Services from './components/services/Services'
import About from './components/about/About'
const App = () => {
  const [col, setcol] = useState('');
  return (
    <div>
      <Header/>
      <Footer/>
      <Nav/>
      <About/>
      <Experience/>
      <Portfolio/>
      <Testimonials/>
      <Contact/>
      <Services/>
      <Footer/>
    </div>
  )
}

export default App
