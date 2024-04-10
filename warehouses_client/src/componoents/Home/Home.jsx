//react components imported
import React, { useEffect } from "react";
//css imported
import "./Home.css";

//AOS imported
import AOS from "aos";
import "aos/dist/aos.css";

//image impoprted local
import backimage from "./Assets/export-compliance-img.png";

//imported all FontAwesomeIcon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { faFileShield } from "@fortawesome/free-solid-svg-icons";
import { faHeadset } from "@fortawesome/free-solid-svg-icons";
import { faUserNurse } from "@fortawesome/free-solid-svg-icons";

import {Link} from 'react-router-dom';

function Home() {
  // Initialize AOS
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div className="landing_img overflow-hidden" id='/'>
        <div className=" card_edit order col mb-3">
          <div className="row no-gutters">
            <div className="col-lg-7">
              <div className="card-body col-lg-11 col-12">
                <h1 className="card-title">
                  Your Lightning Fast Delivery Partner
                </h1>
                <p className="card-text pt-3">
                  Implement advanced tracking systems to monitor the movement of
                  goods in real-time.
                </p>
                <p className="card-text">
                  Managing warehouse content effectively ensures that products
                  are readily available when needed, order fulfillment is
                  efficient, and the overall logistics operations run smoothly.
                  The goal is to optimize the flow of goods from storage to
                  delivery, minimizing delays and maximizing customer
                  satisfaction.
                </p>
                <p className="card-text">
                  By incorporating these elements into our delivery services, I
                  aim to ensure that your warehouse operations experience
                  lightning-fast and efficient delivery of contents, ultimately
                  contributing to improved customer satisfaction and increased
                  operational productivity.
                </p>
                <Link to='login'> <button type="button" className="btn btn-light  pl-5 pr-5 mr-5">
                  Login
                </button></Link>
              </div>

              <div
                className="row gy-4 pt-3"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <div className="col-lg-2 col-6">
                  <div className="stats-item text-center">
                    <FontAwesomeIcon icon={faUsers} className="icon-status" />
                    <p>Clients</p>
                  </div>
                </div>

                <div className="col-lg-2 col-6">
                  <div className="stats-item text-center">
                    <FontAwesomeIcon
                      icon={faFileShield}
                      className="icon-status"
                    />
                    <p>Projects</p>
                  </div>
                </div>

                <div className="col-lg-2 col-6">
                  <div className="stats-item text-center ">
                    <FontAwesomeIcon icon={faHeadset} className="icon-status" />
                    <p>Support</p>
                  </div>
                </div>

                <div className="col-lg-2 col-6">
                  <div className="stats-item text-center">
                    <FontAwesomeIcon
                      icon={faUserNurse}
                      className="icon-status"
                    />
                    <p>Workers</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-5" data-aos="fade-down" data-aos-delay="100">
              <img
                src={backimage}
                className="col-12 p-2  order col-lg pt-5"
                alt="Loading image"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
