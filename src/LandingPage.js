import React from 'react'
import GetStarted from './components/GetStarted'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import Nav from './components/Nav'
import Partners from './components/Partners'
import PopularCategory from './components/PopularCategory'
import Recommended from './components/Recommended'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

const LandingPage = () => {
  return (
    <div>
        <Nav />
        <Hero />
        <Recommended />
        <HowItWorks />
        <PopularCategory />
        <Partners />
        <Testimonials />
        <GetStarted />
        <Footer />
    </div>
  )
}

export default LandingPage