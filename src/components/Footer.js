import React from 'react'
import logo from '../../src/assets/logo.svg'
import Twitter from '../../src/assets/Twitter.svg'
import LinkedIn from '../../src/assets/LinkedIn.svg'
import Instagram from '../../src/assets/Instagram.svg'
import Facebook from '../../src/assets/Facebook.svg'
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <div className='footer'>
        <hr />
        <div className='row p-3'>
            <div className='col-3'>
                <img src={logo} alt='' />
                <p className='mr-4'>Getajob.ng provides a full online service for anyone looking for a new job. We're not a recruitment agency, we're a job site.</p>

            </div>
            <div className='col-2'>
                <h5>Information</h5>
                <ul className='list-unstyled'>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Terms & Condition</li>
                </ul>
                
            </div>
            <div className='col-2'>
                <h5>Job Seekers</h5>
                <ul className='list-unstyled'>
                    <li>Create Account</li>
                    <li>Job List</li>
                    <li>FAQ</li>
                </ul>
                
            </div>
            <div className='col-2'>
                <h5>Employers</h5>
                <ul className='list-unstyled'>
                    <li>Create Account</li>
                    <li>Post a Job</li>
                    <li>FAQ</li>
                </ul>
                
            </div>
            <div className='col-3'>
                <h5 className='mb-3'>Social Media</h5>
                <Link to='#'>
                    <img className='mx-1' src={Instagram} alt='' />
                </Link>
                <Link to='#'>
                    <img className='mx-1' src={Twitter} alt='' />
                </Link>
                <Link to='#'>
                    <img className='mx-1' src={Facebook} alt='' />
                </Link>
                <Link to='#'>
                    <img className='mx-1' src={LinkedIn} alt='' />
                </Link>
            </div>
        </div>

        <p className='text-center fs-6 fw-lighter text-muted'>© Copyright Get-A-Job RMS 2019, All right reserved</p>
        
    </div>
  )
}

export default Footer

