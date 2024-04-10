import React,{useEffect} from 'react';

import './Work.css';

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from '@fortawesome/free-solid-svg-icons';

import Makeorder from './Assets/Make An Order.jpg';
import payment from './Assets/Real-time-payments.jpg';
import Track from './Assets/track.jpg';
import Fast from './Assets/fast dev.jpg';

//AOS imported
import AOS from "aos";
import "aos/dist/aos.css";


function Work() {

     // Initialize AOS
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>  
    <div className="work_img" id="section-how-it-works">
        <div className="work_img_one p-5">
            <div className="row justify-content-center mb-5">
                <div className="text-center mt-5">
                    <h1 className="work_headtwo text-light">How It Works</h1>
                </div>    
            </div>

            <div class="row "  data-aos="fade-up" data-aos-duration="5000">
               <div className="col-lg-6">
                    <div className="card-design">
                    <h3 className="card-title text-center">Make An Order</h3>
                    <img src={Makeorder} className="card-img-top col-lg-6 p-0 work_image" alt="..."/>
                    <div className="card-body col-lg-10">
                   
                        <h4 className="card-text car_bodys"><FontAwesomeIcon icon={faStar} className='col-1 text-success'/>Product description, quantity, price, delivery date, delivery point, delivery terms, and payment terms.</h4>
                        <p className="card-text car_bodys">In a nutshell, e-commerce order management is the process of tracking an order from the initial purchase transaction, through the entire fulfillment process, to the point a customer receives their goods.</p>
                    </div>
                    </div>
                </div>

                
                <div className="col-lg-6" data-aos="fade-down">
                    <div className="card-design">
                    <h3 className="card-title text-center">Make A Payment</h3>
                    <img src={payment} className="card-img-top col-lg-6 p-0 work_image" alt="..."/>
                    <div className="card-body col-lg-10">
                   
                        <h4 className="card-text car_bodys"><FontAwesomeIcon icon={faStar} className='col-1 text-success'/>The cash,a check,a wire transfer, credit card, debit card</h4>
                        <p className="card-text car_bodys">Payment is the voluntary transfer of money, equivalent, or other valuable items from one person to another in exchange for goods or services received or to meet a legal obligation. The person who gives the money is often called the payer, while the person who gets the money is called the payee.</p>
                    </div>
                    </div>
                </div>

                
                
                <div className="col-lg-6" data-aos="fade-up" data-aos-duration="5000">
                    <div className="card-design">
                    <h3 className="card-title text-center">Track Your Order</h3>
                    <img src={Track} className="card-img-top col-lg-6 p-0 work_image" alt="..."/>
                    <div className="card-body col-lg-10">
                   
                        <h4 className="card-text car_bodys"><FontAwesomeIcon icon={faStar} className='col-1 text-success'/>Track Delhivery Packages with AfterShip Tracking Page</h4>
                        <p className="card-text car_bodys">Most carriers have a designated tracking page where you can enter your tracking number. Enter the tracking number: Input your tracking number into the appropriate field and click the "Track" button or a similar prompt. This should display the current status and location of your package.</p>
                    </div>
                    </div>
                </div>
               
                <div className="col-lg-6"  data-aos="fade-down">
                    <div className="card-design">
                    <h3 className="card-title text-center">Fast Delivery</h3>
                    <img src={Fast} className="card-img-top col-lg-6 p-0 work_image" alt="..."/>
                    <div className="card-body col-lg-10">
                   
                        <h4 className="card-text car_bodys"><FontAwesomeIcon icon={faStar} className='col-1 text-success'/>Free on qualifying orders. See Order with Prime FREE Same-Day Delivery.</h4>
                        <p className="card-text car_bodys">Rapid delivery is referred to as ASAP delivery fulfilment once the order is placed. Fast deliveries are the distinguished nature of rapid delivery. 10-15 minute deliveries are considered to be rapid. For example, Gopuff, a food and grocery delivery company, promises delivery within 10 minutes of order confirmation</p>
                    </div>
                    </div>
                </div>
                
            </div>




        </div>

    </div>        
        
       
       
    </>
  )
}

export default Work