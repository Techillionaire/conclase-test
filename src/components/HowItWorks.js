import React from 'react'
import PA from '../../src/assets/productAnalyst.svg'
import HR from '../../src/assets/HRmanager.svg'
import ST from '../../src/assets/securitiesTrader.svg'

const HowItWorks = () => {
  return (
    <div className='howItWorks'>
      <div className='row'>
        <div className='col-7'>
          <img src={PA} alt='' />
          <img src={HR} alt='' />
          <img src={ST} alt='' />

        </div>

        <div className='col-5'>
          <h1>How it works</h1>
          <p>Get a job helps you find the right job easily. Get a job helps you find the right job easily. Get a job helps you find the right job easily.</p>
          
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
            <label class="form-check-label" for="flexCheckDefault">
              Search Jobs
            </label>

            <p>We have jobs in the most popular industries and with top companies. Plus, you can create alerts so you never miss a job opportunity.</p>
          </div>

          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
            <label class="form-check-label" for="flexCheckDefault">
              Create a Profile and Get Noticed
            </label>

            <p>Create a profile to showcase your skills and experience so recruiters can find you. Upload your CV so you can apply for jobs quickly and easily.</p>
          </div>

          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
            <label class="form-check-label" for="flexCheckDefault">
              Apply for jobs
            </label>

            <p>Find the training you need to improve your skills, or visit our Career Center for tips and advice to build your career.</p>
          </div>

        </div>
      </div>

    </div>
  )
}

export default HowItWorks