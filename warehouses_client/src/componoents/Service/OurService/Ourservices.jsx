//React components imported
import React, { useEffect } from "react";

//Css imported
import "./Oursev.css";

//AOS imported
import AOS from "aos";
import "aos/dist/aos.css";

//first section tag in image imported
import storage from "../Assets/storage.jpg";
import logistics from "../Assets/logistics-service.jpg";
import Cargo from "../Assets/cargo.jpg";
import Trucking from "../Assets/trucking.jpg";
import Packaging from "../Assets/packaging.jpg";
import Warehousing from "../Assets/warehousing.jpg";

//second selction tag in image imported
import featuedo from "../Assets/features-1.jpg";
import featuedt from "../Assets/features-2.jpg";
import featuedoe from "../Assets/features-3.jpg";
import featuedofour from "../Assets/features-4.jpg";

//FontAwesomeIcon imported
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

function Ourservices() {
  // Initialize AOS
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <section id="service" className="services pt-0">
        <div className="container-faluid p-5" data-aos="fade-up">
          <div className="section-header">
            <span>Our Services</span>
            <h2>Our Services</h2>
          </div>

          <div className="row gy-4 ">
            <div
              className="col-lg-4 col-md-6  pt-5"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="card">
                <div className="card-img">
                  <img
                    src={storage}
                    alt=""
                    loading="eager"
                    className="img-fluid"
                  />
                </div>
                <h3>
                  <a href="#" className="stretched-link">
                    Storage
                  </a>
                </h3>
                <p>
                  Cumque eos in qui numquam. Aut aspernatur perferendis sed
                  atque quia voluptas quisquam repellendus temporibus
                  itaqueofficiis odit
                </p>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6  pt-5"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="card">
                <div className="card-img">
                  <img
                    src={logistics}
                    alt=""
                    loading="eager"
                    className="img-fluid"
                  />
                </div>
                <h3>
                  <a href="#" className="stretched-link">
                    Logistics
                  </a>
                </h3>
                <p>
                  Asperiores provident dolor accusamus pariatur dolore nam id
                  audantium ut et iure incidunt molestiae dolor ipsam ducimus
                  occaecati nisi
                </p>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6  pt-5"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="card">
                <div className="card-img">
                  <img
                    src={Cargo}
                    alt=""
                    loading="eager"
                    className="img-fluid"
                  />
                </div>
                <h3>
                  <a href="#" className="stretched-link">
                    Cargo
                  </a>
                </h3>
                <p>
                  Dicta quam similique quia architecto eos nisi aut ratione aut
                  ipsum reiciendis sit doloremque oluptatem aut et molestiae ut
                  et nihil
                </p>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 pt-5"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="card">
                <div className="card-img">
                  <img
                    src={Trucking}
                    alt=""
                    loading="eager"
                    className="img-fluid"
                  />
                </div>
                <h3>
                  <a href="#" className="stretched-link">
                    Trucking
                  </a>
                </h3>
                <p>
                  Dicta quam similique quia architecto eos nisi aut ratione aut
                  ipsum reiciendis sit doloremque oluptatem aut et molestiae ut
                  et nihil
                </p>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 pt-5"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <div className="card">
                <div className="card-img">
                  <img
                    src={Packaging}
                    alt=""
                    loading="eager"
                    className="img-fluid"
                  />
                </div>
                <h3>
                  <a href="#" className="stretched-link">
                    Packaging
                  </a>
                </h3>
                <p>
                  Illo consequuntur quisquam delectus praesentium modi
                  dignissimos facere vel cum onsequuntur maiores beatae
                  consequatur magni voluptates
                </p>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 pt-5"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <div className="card">
                <div className="card-img">
                  <img
                    src={Warehousing}
                    alt=""
                    loading="eager"
                    className="img-fluid"
                  />
                </div>
                <h3>
                  <a href="#" className="stretched-link">
                    Warehousing
                  </a>
                </h3>
                <p>
                  Quas assumenda non occaecati molestiae. In aut earum sed natus
                  eatae in vero. Ab modi quisquam aut nostrum unde et qui est
                  non quo nulla
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="features" class="features">
        <div class="container-faluid p-5">
          <div
            class="row gy-4 align-items-center features-item"
            data-aos="fade-up"
          >
            <div class="col-md-5">
              <img src={featuedo} class="img-fluid" loading="eager" alt="" />
            </div>
            <div class="col-md-7">
              <h3>
                Voluptatem dignissimos provident quasi corporis voluptates sit
                assumenda.
              </h3>
              <p class="fst-italic">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <ul>
                <li>
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="pr-1 text-primary"
                  />{" "}
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="pr-1 text-primary"
                  />{" "}
                  Duis aute irure dolor in reprehenderit in voluptate velit.
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="pr-1 text-primary"
                  />{" "}
                  Ullam est qui quos consequatur eos accusamus.
                </li>
              </ul>
            </div>
          </div>

          <div
            class="row gy-4 align-items-center features-item"
            data-aos="fade-up"
          >
            <div class="col-md-5 order-1 order-md-2">
              <img src={featuedt} class="img-fluid" loading="eager" alt="" />
            </div>
            <div class="col-md-7 order-2 order-md-1">
              <h3>Corporis temporibus maiores provident</h3>
              <p class="fst-italic">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p>
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum
              </p>
            </div>
          </div>

          <div
            class="row gy-4 align-items-center features-item"
            data-aos="fade-up"
          >
            <div class="col-md-5">
              <img src={featuedoe} class="img-fluid" loading="eager" alt="" />
            </div>
            <div class="col-md-7">
              <h3>
                Sunt consequatur ad ut est nulla consectetur reiciendis animi
                voluptas
              </h3>
              <p>
                Cupiditate placeat cupiditate placeat est ipsam culpa. Delectus
                quia minima quod. Sunt saepe odit aut quia voluptatem hic
                voluptas dolor doloremque.
              </p>
              <ul>
                <li>
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="pr-1 text-primary"
                  />{" "}
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="pr-1 text-primary"
                  />{" "}
                  Duis aute irure dolor in reprehenderit in voluptate velit.
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="pr-1 text-primary"
                  />{" "}
                  Facilis ut et voluptatem aperiam. Autem soluta ad fugiat.
                </li>
              </ul>
            </div>
          </div>

          <div
            class="row gy-4 align-items-center features-item"
            data-aos="fade-up"
          >
            <div class="col-md-5 order-1 order-md-2">
              <img
                src={featuedofour}
                class="img-fluid"
                loading="eager"
                alt=""
              />
            </div>
            <div class="col-md-7 order-2 order-md-1">
              <h3>
                Quas et necessitatibus eaque impedit ipsum animi consequatur
                incidunt in
              </h3>
              <p class="fst-italic">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p>
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Ourservices;
