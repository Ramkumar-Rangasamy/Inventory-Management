import React from 'react';

import './Navbar.css';

import navbarLogo from './Assets/logo_Navbar.png';

import {Link,} from 'react-router-dom';



function Navbar() {



  return (
    <>
       
        <nav className="navbar navbar-expand-lg navbar-light sticky-top ">
            <a className="navbar-brand" href="#">
                <img src={navbarLogo}  className='col-8' alt='Loading_image/pleaseWait !'/>
            </a>
            <button className="navbar-toggler bg-light" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav ml-auto pl-3 mt-2">
                    <li className="nav-item active pr-3">
                    <Link to='/' className="nav-link text-light">Home</Link>   
                    </li>
                    <li className="nav-item active  pr-3">
                      <Link to='/dashboard' className="nav-link text-light">Dashboard</Link> 
                    </li>
                    <li className="nav-item active  pr-3">
                     <Link to='/service' className="nav-link text-light">Services</Link> 
                    </li>
                    <li className="nav-item active dropdown  pr-3">
                        <linK className="nav-link dropdown-toggle text-light" role="button" data-toggle="dropdown" aria-expanded="false">
                        About Us</linK>
                        <div className="dropdown-menu">
                        <Link to='/about' className="dropdown-item">About</Link>
                        <Link to='/how it work' className="dropdown-item">How It Works</Link>
                        </div>
                    </li>
                    <li className="nav-item active  pr-3">
                      <Link to='contact' className="nav-link text-light">Contact Us</Link>
                    </li>
                    <li className="nav-item active  pr-5">
                      <Link to='/login'className="nav-link text-light">Login</Link>
                    </li>
                </ul>
            </div>
        </nav>

    </>
  )
}

export default Navbar