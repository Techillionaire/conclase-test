import React from 'react'
import logo from '../../src/assets/logo.svg'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light ">
    <div class="container-fluid">
    <Link to="/">
      <img src={logo} className="navbar-brand" />
    </Link>
      
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <Link className="nav-link" to="/">
              Link
            </Link>
          </li>

          <li class="nav-item">
            <Link className="nav-link" to="/assessment">
              Link
            </Link>
          </li>

          <li class="nav-item">
            <Link className="nav-link" to="/">
              Link
            </Link>
          </li>

          <li class="nav-item">
            <Link className="nav-link" to="/">
              Link
            </Link>
          </li>

          <li class="nav-item">
            <Link className="nav-link" to="/">
              Link
            </Link>
          </li>

          
          
          
        </ul>
        <form class="d-flex ml-2">
          <button class="btn" type="submit">Sign up</button>
          <button class="btn btn-outline-success " type="submit">Login</button>
        </form>
      </div>
    </div>
  </nav>

  )
}

export default Nav