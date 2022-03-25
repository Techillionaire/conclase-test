import React from 'react'
import OAG from '../../src/assets/Oil and Gas icon.svg'
import HC from '../../src/assets/Healthcare icon.svg'
import EDU from '../../src/assets/Accounting icon.svg'
import ACC from '../../src/assets/Accounting icon (1).svg'
import DAM from '../../src/assets/DAM.svg'
import TECH from '../../src/assets/Laptop.svg'
import SEC from '../../src/assets/Security icon.svg'
import DA from '../../src/assets/Data Analyst Icon.svg'
import { Link } from 'react-router-dom'

const PopularCategory = () => {
  return (
    <div className='popularCategory'>
      <h1 className='text-center my-3'>Popular Category</h1>

      <div className='row'>
        <div className='col-3'>
            <div className='card popularcard'>
              <div className='popularCategoryCard'>
                <img src={OAG} alt='' className='popularImg'/>

                <p className='popularPP text-center'>Oil and Gas</p>
                <Link to='/' className='popularP'>(20 new jobs)</Link>

              </div>
              
            </div>
          </div>

          <div className='col-3'>
          <div className='card popularcard'>
            <div className='popularCategoryCard'>
              <img src={HC} alt='' className='popularImg'/>

              <p className='popularPP text-center'>Healthcare</p>
              <Link to='/' className='popularP'>(20 new jobs)</Link>

            </div>
            
          </div>
        </div>

        <div className='col-3'>
          <div className='card popularcard'>
            <div className='popularCategoryCard'>
              <img src={EDU} alt='' className='popularImg'/>

              <p className='popularPP text-center'>Education</p>
              <Link to='/' className='popularP'>(20 new jobs)</Link>

            </div>
            
          </div>
        </div>

        <div className='col-3'>
          <div className='card popularcard'>
            <div className='popularCategoryCard'>
              <img src={ACC} alt='' className='popularImg'/>

              <p className='popularPP text-center'>Accounting</p>
              <Link to='/' className='popularP'>(20 new jobs)</Link>

            </div>
            
          </div>
        </div>

        
      </div>

      <div className='row'>
        

        <div className='col-3'>
          <div className='card popularcard'>
            <div className='popularCategoryCard'>
              <img src={DAM} alt='' className='popularImg'/>

              <p className='popularPP text-center'>Design</p>
              <Link to='/' className='popularP'>(20 new jobs)</Link>

            </div>
            
          </div>
        </div>

        <div className='col-3'>
          <div className='card popularcard'>
            <div className='popularCategoryCard'>
              <img src={TECH} alt='' className='popularImg'/>

              <p className='popularPP text-center'>Technology</p>
              <Link to='/' className='popularP'>(20 new jobs)</Link>

            </div>
            
          </div>
        </div>

        <div className='col-3'>
          <div className='card popularcard'>
            <div className='popularCategoryCard'>
              <img src={SEC} alt='' className='popularImg'/>

              <p className='popularPP text-center'>Security</p>
              <Link to='/' className='popularP'>(20 new jobs)</Link>

            </div>
            
          </div>
        </div>

        <div className='col-3'>
          <div className='card popularcard'>
            <div className='popularCategoryCard'>
              <img src={DA} alt='' className='popularImg'/>

              <p className='popularPP text-center'>Data Analyst</p>
              <Link to='/' className='popularP'>(20 new jobs)</Link>

            </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default PopularCategory