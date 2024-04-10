//React componoent imported 
import React,{useEffect} from 'react';

//Css style imported
import './FeaturedServices.css';

//AOS imported
import AOS from 'aos';
import 'aos/dist/aos.css';

//FontAwesomeIcon imported
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCartFlatbed} from "@fortawesome/free-solid-svg-icons"; 
import {faTruck} from "@fortawesome/free-solid-svg-icons";
import {faTruckRampBox} from "@fortawesome/free-solid-svg-icons"; 
import {faArrowRight} from "@fortawesome/free-solid-svg-icons"; 

function FeaturedServices() {

// Initialize AOS  
  useEffect(() => {
    AOS.init(); 
  }, []);


  return (
    <>
      <div className="container">

        <div className="row gy-4 pt-5 pb-5">
          
          <div className="col-lg-4 col-md-6 service-item d-flex pt-4" data-aos="fade-up">
            <div className="icon flex-shrink-0 mr-3"><FontAwesomeIcon icon={faCartFlatbed} className='services_icon col-8' /></div>
            <div>
              <h4 className="title">Lorem Ipsum</h4>
                <p className="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.</p>
                <a href="#" className="readmore stretched-link"><span>Learn More</span><FontAwesomeIcon icon={faArrowRight} className='col-1 mr-2' /></a>
              </div>
          </div>
         

          <div className="col-lg-4 col-md-6 service-item d-flex pt-4" data-aos="fade-up" data-aos-delay="100">
            <div className="icon flex-shrink-0 mr-3"><FontAwesomeIcon icon={faTruck}  className='services_icon col-8' /></div>
            <div>
              <h4 className="title">Dolor Sitema</h4>
              <p className="description">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata.</p>
              <a href="#" className="readmore stretched-link"><span>Learn More</span><FontAwesomeIcon icon={faArrowRight} className='col-1 mr-2' /></a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 service-item d-flex pt-4" data-aos="fade-up" data-aos-delay="200">
            <div className="icon flex-shrink-0 mr-3"><FontAwesomeIcon icon={faTruckRampBox}  className='services_icon col-8'/></div>
            <div>
              <h4 className="title">Sed ut perspiciatis</h4>
              <p className="description">Section title. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. </p>
              <a href="#" className="readmore stretched-link"><span>Learn More</span><FontAwesomeIcon icon={faArrowRight} className='col-1 mr-2' /></a>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default FeaturedServices