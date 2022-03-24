import React from 'react'
// import PA from '../../src/assets/productAnalyst.svg'
// import HR from '../../src/assets/HRmanager.svg'
// import ST from '../../src/assets/securitiesTrader.svg'
import hiw from '../../src/assets/hiw.svg'
import check from '../../src/assets/check.svg'

const HowItWorks = () => {
  return (
    <div className='howItWorks'>
      <div className='row howItWorksRow'>
        <div className='col-7'>
          {/* <img src={PA} alt='' />
          <img src={HR} alt='' />
          <img src={ST} alt='' /> */}
          <img src={hiw} alt='' className='hiwImages'/>

        </div>

        <div className='col-5'>
          <h1 className='my-2'>How it works</h1>
          <p className='my-3'>Get a job helps you find the right job easily. Get a job helps you find the right job easily. Get a job helps you find the right job easily.</p>
          
          <div class="form-check">
            <span>
              <img src={check} alt='' />
            </span>
            <label class="form-check-label fs-5 fw-bold" for="flexCheckDefault">
              Search Jobs
            </label>

            <p className='fw-light my-3'>We have jobs in the most popular industries and with top companies. Plus, you can create alerts so you never miss a job opportunity.</p>
          </div>

          <div class="form-check">
          <span>
              <img src={check} alt='' />
            </span>
            <label class="form-check-label fs-5 fw-bold" for="flexCheckDefault">
              Create a Profile and Get Noticed
            </label>

            <p className='fw-light my-3'>Create a profile to showcase your skills and experience so recruiters can find you. Upload your CV so you can apply for jobs quickly and easily.</p>
          </div>

          <div class="form-check">
            <span>
              <img src={check} alt='' />
            </span>
            <label class="form-check-label fs-5 fw-bold" for="flexCheckDefault">
              Apply for jobs
            </label>

            <p className='fw-light my-3'>Find the training you need to improve your skills, or visit our Career Center for tips and advice to build your career.</p>
          </div>

        </div>
      </div>

    </div>
  )
}

export default HowItWorks