import React from 'react'
import logo from '../../src/assets/logo.svg'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light ">
    <div class="container-fluid">
    <Link to="/">
      <img src={logo} className="navbar-brand" alt=''/>
    </Link>
      
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <Link className="nav-link" to="/">
              Companies
            </Link>
          </li>

          <li class="nav-item">
            <Link className="nav-link" to="/">
              Candidates
            </Link>
          </li>

          <li class="nav-item">
            <Link className="nav-link" to="/assessment">
              Assessment
            </Link>
          </li>

          <li class="nav-item">
            <Link className="nav-link" to="/">
              Post a Job
            </Link>
          </li>

          <li class="nav-item">
            <Link className="nav-link" to="/">
              Career Advice
            </Link>
          </li>

          
          
          
        </ul>
        <form className="d-flex navButtons">
          <button className="signupbtn btn" type="submit ">Sign up</button>
          <button className="loginbtn px-4" type="submit ">Login</button>
        </form>
      </div>
    </div>
  </nav>

//   <nav class="navbar navbar-expand-lg navbar-light bg-light">
//   <div class="container-fluid">
//     <a class="navbar-brand" href="/">Navbar</a>
//     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//       <span class="navbar-toggler-icon"></span>
//     </button>
//     <div class="collapse navbar-collapse" id="navbarSupportedContent">
//       <ul class="navbar-nav me-auto mb-2 mb-lg-0">
//         <li class="nav-item">
//           <a class="nav-link active" aria-current="page" href="/">Home</a>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link" href="/">Link</a>
//         </li>
//         <li class="nav-item dropdown">
//           <a class="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
//             Dropdown
//           </a>
//           <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
//             <li><a class="dropdown-item" href="/">Action</a></li>
//             <li><a class="dropdown-item" href="/">Another action</a></li>
//             <li><hr class="dropdown-divider" /></li>
//             <li><a class="dropdown-item" href="/">Something else here</a></li>
//           </ul>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link disabled" href="/">Disabled</a>
//         </li>
//       </ul>
//       <form class="d-flex">
//         <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
//         <button class="btn btn-outline-success" type="submit">Search</button>
//       </form>
//     </div>
//   </div>
// </nav>

  )
}

export default Nav