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
                <Link to='/' >
                    <img src={logo} alt='' />
                </Link>
                
                <p className='mr-4'>Getajob.ng provides a full online service for anyone looking for a new job. We're not a recruitment agency, we're a job site.</p>

            </div>
            <div className='col-2'>
                <h5>Information</h5>
                <ul className='list-unstyled'>
                    <li><Link className='footerLink' to='/'>About Us</Link></li>
                    <li><Link className='footerLink' to='/'>Contact Us</Link></li>
                    <li><Link className='footerLink' to='/'>Terms & Condition</Link></li>
                </ul>
                
            </div>
            <div className='col-2'>
                <h5>Job Seekers</h5>
                <ul className='list-unstyled'>
                    <li><Link className='footerLink' to='/'>Create Account</Link></li>
                    <li><Link className='footerLink' to='/'>Job List</Link></li>
                    <li><Link className='footerLink' to='/'>FAQ</Link></li>
                </ul>
                
            </div>
            <div className='col-2'>
                <h5>Employers</h5>
                <ul className='list-unstyled'>
                <ul className='list-unstyled'>
                    <li><Link className='footerLink' to='/'>Create Account</Link></li>
                    <li><Link className='footerLink' to='/'>Post a Job</Link></li>
                    <li><Link className='footerLink' to='/'>FAQ</Link></li>
                </ul>
                </ul>
                
            </div>
            <div className='col-3'>
                <h5 className='mb-3'>Social Media</h5>
                <Link to='/'>
                    <img className='mx-1' src={Instagram} alt='' />
                </Link>
                <Link to='/'>
                    <img className='mx-1' src={Twitter} alt='' />
                </Link>
                <Link to='/'>
                    <img className='mx-1' src={Facebook} alt='' />
                </Link>
                <Link to='/'>
                    <img className='mx-1' src={LinkedIn} alt='' />
                </Link>
            </div>
        </div>

        <p className='text-center fs-6 fw-lighter text-muted'>© Copyright Get-A-Job RMS 2019, All right reserved</p>
        
    </div>
  )
}

export default Footer

