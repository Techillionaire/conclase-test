import React from 'react'
import OAG from '../../src/assets/Oil and Gas icon.svg'
// import HC from '../../src/assets/Healthcare icon.svg'
// import EDU from '../../src/assets/Accounting icon.svg'
// import ACC from '../../src/assets/Accounting icon (1).svg'
// import DAM from '../../src/assets/DAM.svg'
// import TECH from '../../src/assets/Laptop.svg'
// import SEC from '../../src/assets/Security icon.svg'
// import DA from '../../src/assets/Data Analyst Icon.svg'

const PopularCategory = () => {
  return (
    <div className='popularCategory'>
      <h1 className='text-center my-5'>Popular Category</h1>

      <div className='row'>
        <div className='col'>
          <div className='card'>
            <img src={OAG} alt='' />

            <p>Oil and Gas</p>
            <p>(20 new jobs)</p>
          </div>
        </div>

        <div className='col'>
          <div className='card'>
            <img src={OAG} alt='' />

            <p>Oil and Gas</p>
            <p>(20 new jobs)</p>
          </div>
        </div>
        <div className='col'>
          <div className='card'>
            <img src={OAG} alt='' />

            <p>Oil and Gas</p>
            <p>(20 new jobs)</p>
          </div>
        </div>
        <div className='col'>
          <div className='card'>
            <img src={OAG} alt='' />

            <p>Oil and Gas</p>
            <p>(20 new jobs)</p>
          </div>
        </div>
      </div>

      <div className='row'>
      <div className='col'>
          <div className='card'>
            <img src={OAG} alt='' />

            <p>Oil and Gas</p>
            <p>(20 new jobs)</p>
          </div>
        </div>
        <div className='col'>
          <div className='card'>
            <img src={OAG} alt='' />

            <p>Oil and Gas</p>
            <p>(20 new jobs)</p>
          </div>
        </div>
        <div className='col'>
          <div className='card'>
            <img src={OAG} alt='' />

            <p>Oil and Gas</p>
            <p>(20 new jobs)</p>
          </div>
        </div>
        <div className='col'>
          <div className='card'>
            <img src={OAG} alt='' />

            <p>Oil and Gas</p>
            <p>(20 new jobs)</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PopularCategory