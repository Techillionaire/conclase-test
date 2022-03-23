import React from 'react'
import { HiArrowNarrowRight } from "react-icons/hi";
import FW from '../../src/assets/Flutterwav.svg'
import Uber from '../../src/assets/Uber.svg'
import Zapier from '../../src/assets/Zapier.svg'
import Airtel from '../../src/assets/Airtel.svg'
import etisalat from '../../src/assets/9mobile.svg'
import Accenture from '../../src/assets/Accenture.svg'
import Mckinsey from '../../src/assets/Mckinsey.svg'
import Googl from '../../src/assets/Googl.svg'

const Partners = () => {
  return (
    <div className='partners'>
      <div className='row'>
        <div className='col'>
          <h1>Over  1000+  jobs from top companies in our network</h1>
          <p>Every day we index millions of jobs directly from employer websites. We’re committed to accurate, high-quality jobs so you won’t find old, duplicated, or spammy listings here.</p>
          <p>Organize and automate your job search while at home or on the go. We’ll deliver new, relevant jobs of interest straight to your inbox.</p>
          
          <a href='https://www.google.com'>Learn More</a>
          <i>
            <HiArrowNarrowRight />
          </i>
        </div>

        <div className='col'>
          <img src={FW} alt='' />
          <img src={Uber} alt='' />
          <img src={Zapier} alt='' />
          <img src={Airtel} alt='' />
          <img src={etisalat} alt='' />
          <img src={Accenture} alt='' />
          <img src={Mckinsey} alt='' />
          <img src={Googl} alt='' />
        </div>
      </div>
    </div>
  )
}

export default Partners