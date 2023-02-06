import React from "react";
import { Link } from "react-router-dom";

import "./section_4.scss";

import service_1 from "../../../assets/img/services/service-1.jpg"
import service_2 from "../../../assets/img/services/service-2.jpg"

function Section4 () {
    return (
        <section className="service-wrap ptb-100">
        <div className="container">
          <div className="section-title style1 text-center mb-50">
            <span>What We Do</span>
            <h2>We Offer The Best Services</h2>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-12">
              <div className="service-slider-one owl-carousel">
                <div className="item">
                  <div className="service-card style1">
                    <div className="service-img">
                      <img  src={service_1} alt="service"
                      />
                    </div>
                    <div className="service-info">
                      <span className="service-blur-icon">
                        <i className="flaticon-finger-print"></i>
                      </span>
                      <span className="service-icon">
                        <i className="flaticon-finger-print"></i>
                      </span>
                      <h3 className="service-title">
                        <Link to="service-details.html">Finger Print Access</Link>
                      </h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur selised do
                        eiusmod tempor incididunt ut lab et aaliqua. Quis ipsum
                        suspendisse eiusmod
                      </p>
                      <Link to="service-details.html" class="btn style2">
                        <span>Learn More</span>
                        <i class="flaticon-right-arrow-1"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="service-card style1">
                    <div className="service-img">
                      <img src={service_2} alt="service"
                      />
                    </div>
                    <div class="service-info">
                      <span class="service-blur-icon">
                        <i class="flaticon-face"></i>
                      </span>
                      <span class="service-icon">
                        <i class="flaticon-face"></i>
                      </span>
                      <h3 class="service-title">
                        <Link to ="service-details.html">
                          Closed Circuit Cameras</Link>
                        
                      </h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur selised do
                        eiusmod tempor incididunt ut lab et aaliqua. Quis ipsum
                        suspendisse eiusmod
                      </p>
                      <a href="service-details.html" class="btn style2"
                        ><span>Learn More</span>
                        <i class="flaticon-right-arrow-1"></i
                      ></a>
                    </div>
                  </div>
                </div>
                <div class="item">
                  <div class="service-card style1">
                    <div class="service-img">
                      <img
                        src="assets/img/services/service-3.jpg"
                        alt="Image"
                      />
                    </div>
                    <div class="service-info">
                      <span class="service-blur-icon">
                        <i class="flaticon-cctv"></i
                      ></span>
                      <span class="service-icon">
                        <i class="flaticon-cctv"></i>
                      </span>
                      <h3 class="service-title">
                        <a href="service-details.html">CCTV Installation</a>
                      </h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur selised do
                        eiusmod tempor incididunt ut lab et aaliqua. Quis ipsum
                        suspendisse eiusmod
                      </p>
                      <a href="service-details.html" class="btn style2"
                        ><span>Learn More</span>
                        <i class="flaticon-right-arrow-1"></i
                      ></a>
                    </div>
                  </div>
                </div>
                <div class="item">
                  <div class="service-card style1">
                    <div class="service-img">
                      <img
                        src="assets/img/services/service-4.jpg"
                        alt="Image"
                      />
                    </div>
                    <div class="service-info">
                      <span class="service-blur-icon">
                        <i class="flaticon-home-1"></i
                      ></span>
                      <span class="service-icon">
                        <i class="flaticon-home-1"></i>
                      </span>
                      <h3 class="service-title">
                        <a href="service-details.html">Smart Home System</a>
                      </h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur selised do
                        eiusmod tempor incididunt ut lab et aaliqua. Quis ipsum
                        suspendisse eiusmod
                      </p>
                      <a href="service-details.html" class="btn style2"
                        ><span>Learn More</span>
                        <i class="flaticon-right-arrow-1"></i
                      ></a>
                    </div>
                  </div>
                </div>
                <div class="item">
                  <div class="service-card style1">
                    <div class="service-img">
                      <img
                        src="assets/img/services/service-5.jpg"
                        alt="Image"
                      />
                    </div>
                    <div class="service-info">
                      <span class="service-blur-icon">
                        <i class="flaticon-shield"></i
                      ></span>
                      <span class="service-icon">
                        <i class="flaticon-shield"></i>
                      </span>
                      <h3 class="service-title">
                        <a href="service-details.html">Security Consulting</a>
                      </h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur selised do
                        eiusmod tempor incididunt ut lab et aaliqua. Quis ipsum
                        suspendisse eiusmod
                      </p>
                      <a href="service-details.html" class="btn style2"
                        ><span>Learn More</span>
                        <i class="flaticon-right-arrow-1"></i
                      ></a>
                    </div>
                  </div>
                </div>
                <div class="item">
                  <div class="service-card style1">
                    <div class="service-img">
                      <img
                        src="assets/img/services/service-6.jpg"
                        alt="Image"
                      />
                    </div>
                    <div class="service-info">
                      <span class="service-blur-icon">
                        <i class="flaticon-analytics"></i
                      ></span>
                      <span class="service-icon">
                        <i class="flaticon-analytics"></i>
                      </span>
                      <h3 class="service-title">
                        <a href="service-details.html"
                          >Video Analytics System</a
                        >
                      </h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur selised do
                        eiusmod tempor incididunt ut lab et aaliqua. Quis ipsum
                        suspendisse eiusmod
                      </p>
                      <a href="service-details.html" class="btn style2"
                        ><span>Learn More</span>
                        <i class="flaticon-right-arrow-1"></i
                      ></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    )
}

export default Section4