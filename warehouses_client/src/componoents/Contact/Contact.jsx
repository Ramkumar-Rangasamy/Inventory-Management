//React imported
import React,{useEffect} from "react";

//Css imported
import "./Contact.css";

//AOS imported
import AOS from 'aos';
import 'aos/dist/aos.css';

//FontAwesomeIcon imported
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressBook } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLocationCrosshairs } from "@fortawesome/free-solid-svg-icons";

function Contact() {

  // Initialize AOS  
  useEffect(() => {
    AOS.init(); 
  }, []);

  return (
    <>
      <div className="breadcrumbs-contact">
        <div className="page-header d-flex align-items-center">
          <div className="container position-relative">
            <div className="row d-flex justify-content-center">
              <div className="col-lg-6 text-center">
                <h2>Contact</h2>
                <p>
                  Your Contact Us page can leave a lasting impression on
                  existing and potential customers. Do away with generic
                  templates and create a page that stands out in all the right
                  ways.
                </p>
              </div>
            </div>
          </div>
        </div>
        <nav>
          <div className="container">
            <ol>
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>Contact</li>
            </ol>
          </div>
        </nav>
      </div>

      <section id="contact" className="contact">
        <div className="container" data-aos="fade-up">
          <div>
            <iframe
              className="map_contact"
              src="https://maps.google.com/maps?q=kgisl micro college&t=k&z=10&ie=UTF8&iwloc=&output=embed"
              frameborder="0"
              allowfullscreen
            ></iframe>
          </div>

          <div className="row gy-4 mt-4 pt-5">
            <div className="col-lg-4">
              <div className="info-item d-flex">
                <i>
                  {" "}
                  <FontAwesomeIcon icon={faLocationCrosshairs} />{" "}
                </i>
                <div>
                  <h4>Location :</h4>
                  <p>KGiSL Campus,365,Coimbatore,Tamil Nadu 641035</p>
                </div>
              </div>

              <div className="info-item d-flex">
                <i>
                  <FontAwesomeIcon icon={faEnvelope} />
                </i>
                <div>
                  <h4>Email :</h4>
                  <p>Kgisl@example.com</p>
                </div>
              </div>

              <div className="info-item d-flex">
                <i>
                  {" "}
                  <FontAwesomeIcon icon={faAddressBook} />
                </i>
                <div>
                  <h4>Call :</h4>
                  <p>+91 9944 8971 80</p>
                </div>
              </div>
            </div>

            <div className="col-lg-8 ">
              <form
                className="forms/contact.php php-email-form"
                method="post"
                role="form"
              >
                <div className="row">
                  <div className="col-md-6 form-group">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      id="name"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div className="col-md-6 form-group mt-3 mt-md-0">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      placeholder="Your Email"
                      required
                    />
                  </div>
                </div>
                <div className="form-group mt-3">
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    id="subject"
                    placeholder="Subject"
                    required
                  />
                </div>
                <div className="form-group mt-3">
                  <textarea
                    className="form-control"
                    name="message"
                    rows="5"
                    placeholder="Message"
                    required
                  ></textarea>
                </div>
                <div className="my-3">
                  <div className="loading">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message">
                    Your message has been sent. Thank you!
                  </div>
                </div>
                <div className="text-center">
                  <button type="submit">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
