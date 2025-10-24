import { useState } from 'react'
import { Navbar } from './components/NavBar.jsx'
import { Hero } from './components/Hero.jsx'
import { FeaturedSection } from './components/Featured.jsx'
import { Testimonials } from './components/Testimonial.jsx'
import { Footer } from './components/Footer.jsx'

function App() {
  return (
    <>
      <Navbar />
      <Hero/>
      <FeaturedSection/>
      <Testimonials/>
      <Footer/>
    </>
  )
}

export default App
