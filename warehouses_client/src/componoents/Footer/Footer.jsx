import React,{useEffect} from 'react'

import './Footer.css';

//AOS imported
import AOS from 'aos';
import 'aos/dist/aos.css';

//FontAwesomeIcon imported
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTwitter} from "@fortawesome/free-brands-svg-icons"; 
import {faFacebook} from "@fortawesome/free-brands-svg-icons";
import {faInstagram} from "@fortawesome/free-brands-svg-icons";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons"; 


function Footer() {

   // Initialize AOS  
  useEffect(() => {
    AOS.init(); 
  }, []);

  //every year automatically change
  const year=new Date();


  return (

    <>
     <footer id="footer" className="footer">

<div className="container mb-5">
  <div className="row gy-4">
    <div className="col-lg-5 col-md-12 footer-info pt-5">
      <a href="#" className="logo d-flex align-items-center">
        <span>Warehouse</span>
      </a>
      <p>A warehouse is a building for storing goods. Warehouses are used by manufacturers, importers, exporters, wholesalers, transport businesses, customs, etc.</p>
      <div className="social-links d-flex mt-4">
        <a href="#" className="twitter"><i><FontAwesomeIcon icon={faTwitter} /></i></a>
        <a href="#" className="facebook"><i><FontAwesomeIcon icon={faFacebook} /></i></a>
        <a href="#" className="instagram"><i><FontAwesomeIcon icon={faInstagram} /></i></a>
        <a href="#" className="linkedin"><i><FontAwesomeIcon icon={faLinkedin} /></i></a>
      </div>
    </div>

    <div className="col-lg-2 col-6 footer-links pt-5 ">
      <h4>Useful Links</h4>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">How It Works</a></li>
        <li><a href="#">About us</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Terms of service</a></li>
        <li><a href="#">Privacy policy</a></li>
      </ul>
    </div>

    <div className="col-lg-2 col-6 footer-links pt-5">
      <h4>Our Services</h4>
      <ul>
        <li><a href="#">Storage</a></li>
        <li><a href="#">Logistics</a></li>
        <li><a href="#">Cargo</a></li>
        <li><a href="#">Trucking</a></li>
        <li><a href="#">Packaging</a></li>
        <li><a href="#">Warehousing</a></li>
      </ul>
    </div>

    <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start pt-5">
      <h4>Contact Us</h4>
      <p>
        From Indian<br/>
        Mettupalayam<br/>
        Coimbatore 641302.<br/><br/>
        <strong>Phone :</strong> +91 9944 8971 80<br/>
        <strong>Email :</strong> info@example.com<br/>
      </p>

    </div>

  </div>
</div>

<div className="container">
  <div className="copyright">
     Copyright &copy; 2023 - {year.getFullYear()} Warehouse, All Rights Reserved
  </div>
  <div className="credits">
   
    Designed by <a href="http://ramkumar-2023-portfolio.netlify.app">Ramkumar R</a>
  </div>
</div>

</footer>

    </>
  )
}

export default Footer