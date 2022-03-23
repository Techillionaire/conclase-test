import React from 'react'
import { HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi";
import test from '../../src/assets/testimonial.svg'


const Testimonials = () => {
  return (
    <div className='testimonials'>
        <h2>What are our customers saying</h2>
        <div className='row'>
            <div className='col-3'>
                <img src={test} alt='' />
            </div>

            <div className='col-9'>
                <p>"</p>
                <div className='arrows'>
                    <i><HiArrowNarrowLeft /></i>
                    <i><HiArrowNarrowRight /></i>
                </div>

                <p>The platform is really convenient to reach out to companies & I have managed to secure 2 interviews already! I can also track my application status instead of wondering whether the company has seen or shortlisted me</p>
                <bold>Irma Black</bold>
                <small>HR Manager at MasterCard</small>
            </div>
        </div>
    </div>
  )
}

export default Testimonials