import React from 'react'
import paystackcolor from '../../src/assets/paystackcolor.svg'
// import flutterwave from '../../src/assets/flutterwave.svg'
// import access from '../../src/assets/access.svg'
// import google from '../../src/assets/google.svg'
import { GoLocation } from "react-icons/go";
import { HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi";

const Recommended = () => {
  return (
    <div className='recommended'>
      <h2>Recommended Jobs</h2>
      <div className='row'>
        <div className='col'>
          <div className='card'>
            <small>Full time</small>

            <img src={paystackcolor} alt='' />
            <h5>QA Engineer</h5>
            <hr />
            <h5>Paystack</h5>
            <div className='location d-flex'>
              <i>
                <GoLocation />
              </i>

              <p>Lagos, Nigeria</p>

              <button>Apply now</button>

            </div>
          </div>
        </div>

        <div className='col'>
          <div className='card'>
            <small>Full time</small>

            <img src={paystackcolor} alt='' />
            <h5>QA Engineer</h5>
            <hr />
            <h5>Paystack</h5>
            <div className='location d-flex'>
              <i>
                <GoLocation />
              </i>

              <p>Lagos, Nigeria</p>

              <button>Apply now</button>

            </div>
          </div>
        </div>
        <div className='col'>
          <div className='card'>
            <small>Full time</small>

            <img src={paystackcolor} alt='' />
            <h5>QA Engineer</h5>
            <hr />
            <h5>Paystack</h5>
            <div className='location d-flex'>
              <i>
                <GoLocation />
              </i>

              <p>Lagos, Nigeria</p>

              <button>Apply now</button>

            </div>
          </div>
        </div>
        <div className='col'>
          <div className='card'>
            <small>Full time</small>

            <img src={paystackcolor} alt='' />
            <h5>QA Engineer</h5>
            <hr />
            <h5>Paystack</h5>
            <div className='location d-flex'>
              <i>
                <GoLocation />
              </i>

              <p>Lagos, Nigeria</p>

              <button>Apply now</button>

            </div>
          </div>
        </div>
      </div>

      <div className='arrows'>
        <i><HiArrowNarrowLeft /></i>
        <i><HiArrowNarrowRight /></i>
      </div>

    </div>
  )
}

export default Recommended