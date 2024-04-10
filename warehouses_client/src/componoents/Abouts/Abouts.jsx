//React components imported
import React, { useEffect } from "react";

//Css imported
import "./Abouts.css";

//video opened image impported
import aboutimg from "./Assets/about.jpg";

//AOS imported
import AOS from "aos";
import "aos/dist/aos.css";

//imported FontAwesomeIcon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiagramSuccessor } from "@fortawesome/free-solid-svg-icons";
import { faDoorOpen } from "@fortawesome/free-solid-svg-icons";
import { faTowerBroadcast } from "@fortawesome/free-solid-svg-icons";

function Abouts() {
  // Initialize AOS
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div className="breadcrumbs-about">
        <div className="page-header d-flex align-items-center">
          <div className="container position-relative">
            <div className="row d-flex justify-content-center">
              <div className="col-lg-6 text-center">
                <h2>About</h2>
                <p>
                  Odio et unde deleniti. Deserunt numquam exercitationem.
                  Officiis quo odio sint voluptas consequatur ut a odio
                  voluptatem. Sit dolorum debitis veritatis natus dolores. Quasi
                  ratione sint. Sit quaerat ipsum dolorem.
                </p>
              </div>
            </div>
          </div>
        </div>
        <nav>
          <div className="container">
            <ol>
              <li className="acolor">
                <a href="#">Home</a>
              </li>
              <li>About</li>
            </ol>
          </div>
        </nav>
      </div>

      <section id="about" className="about">
        <div className="container-fluid p-3" data-aos="fade-up">
          <div className="row gy-4">
            <div className="col-lg-6 position-relative align-self-start order-lg-last order-first">
              <img src={aboutimg} className="col-lg-12" alt="" />
              <a
                href="https://www.youtube.com/watch?v=OzMCn_2sImQ&list=WL&index=5"
                target="_blank"
                className=" play-btn"
              ></a>
            </div>
            <div className="col-lg-6 content order-last  order-lg-first pt-4">
              <h3>About Us</h3>
              <p>
                Dolor iure expedita id fuga asperiores qui sunt consequatur
                minima. Quidem voluptas deleniti. Sit quia molestiae quia quas
                qui magnam itaque veritatis dolores. Corrupti totam ut eius
                incidunt reiciendis veritatis asperiores placeat.
              </p>
              <ul>
                <li data-aos="fade-up" data-aos-delay="100">
                  <FontAwesomeIcon
                    icon={faDiagramSuccessor}
                    className="col-1 icon-about"
                  />
                  <div>
                    <h5>Ullamco laboris nisi ut aliquip consequat</h5>
                    <p>
                      Magni facilis facilis repellendus cum excepturi quaerat
                      praesentium libre trade
                    </p>
                  </div>
                </li>
                <li data-aos="fade-up" data-aos-delay="200">
                  <FontAwesomeIcon
                    icon={faDoorOpen}
                    className="col-1 icon-about"
                  />
                  <div>
                    <h5>Magnam soluta odio exercitationem reprehenderi</h5>
                    <p>
                      Quo totam dolorum at pariatur aut distinctio dolorum
                      laudantium illo direna pasata redi
                    </p>
                  </div>
                </li>
                <li data-aos="fade-up" data-aos-delay="300">
                  <FontAwesomeIcon
                    icon={faTowerBroadcast}
                    className="col-1 icon-about"
                  />
                  <div>
                    <h5>Voluptatem et qui exercitationem</h5>
                    <p>
                      Et velit et eos maiores est tempora et quos dolorem autem
                      tempora incidunt maxime veniam
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Abouts;
