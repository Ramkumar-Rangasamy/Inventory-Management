import React from "react";

import "./service.css";
import Ourservices from "./OurService/Ourservices";

function Service() {
  return (
    <>
      <div className="breadcrumbs-service " id="/service">
        <div className="page-header d-flex align-items-center">
          <div className="container position-relative">
            <div className="row d-flex justify-content-center">
              <div className="col-lg-6 text-center">
                <h2>Service</h2>
                <p>
                  It looks like your question is a bit general, and it would be
                  helpful to have more specific details about what you're
                  looking for regarding "details warehouse." A warehouse
                  typically involves the storage, organization, and management
                  of goods or products. Here are some aspects related to
                  warehouse details that you might be interested in.
                </p>
              </div>
            </div>
          </div>
        </div>

        <nav>
          <div className="container">
            <ol>
              <li>
                <a href="#">Home</a>
              </li>
              <li>Service</li>
            </ol>
          </div>
        </nav>
      </div>

      <Ourservices />
    </>
  );
}

export default Service;
