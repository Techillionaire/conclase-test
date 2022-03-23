import React from 'react'
import paystack from '../../src/assets/paystack-removebg-preview.svg'
import google from '../../src/assets/google-removebg-preview.svg'
import kpmg from '../../src/assets/kpmg-removebg-preview.svg'
import heroImg from '../../src/assets/hero-image.svg'

const Hero = () => {
  return (
    <div className='hero'>
      <div className='row'>
        <div className='col'>
          <h1>Find a Job easily</h1>
          <p>With a verified, up-to-date job listings directly from employer websites, we create a premium experience for job seekers, employers, and data seekers alike.</p>
          <input type='text' />

          <h5>Trusted by:</h5>
          <div className='brand'>
            <img src={paystack} alt='' />
            <img src={google} alt='' />
            <img src={kpmg} alt='' />
          </div>

        </div>
        <div className='col'>
          <img src={heroImg} alt='' />
 
        </div>
      </div>
    </div>
  )
}

export default Hero