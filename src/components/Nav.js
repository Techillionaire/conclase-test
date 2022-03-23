import React from 'react'


const Nav = () => {
  return (
    <header className=''>
      <div className='logo'>
        <img src='#' alt='logoImg' />
      </div>

      <div className='links'>
        <ul>
          <li>Companies</li>
          <li>Candidates</li>
          <li>Assessment</li>
          <li>Post a Job</li>
          <li>Career Advice</li>
        </ul>

      </div>

      <div className='buttons'>
        <button>Sign up</button>
        <button>Login</button>
      </div>
    </header>
  )
}

export default Nav