import React from 'react'
// import GetStarted from './GetStarted'
import Hero from './Hero'
import HowItWorks from './HowItWorks'
import Nav from './Nav'
import Partners from './Partners'
import PopularCategory from './PopularCategory'
import Recommended from './Recommended'
import Testimonials from './Testimonials'
import Footer from './Footer'

const LandingPage = () => {
  return (
    <div className='container'>
        <Nav />
        <Hero />
        <Recommended />
        <HowItWorks />
        <PopularCategory />
        <Partners />
        <Testimonials />
        {/* <GetStarted /> */}
        <Footer />
    </div>
  )
}

export default LandingPage