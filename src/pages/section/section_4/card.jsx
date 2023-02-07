import React from "react";
import { Link } from "react-router-dom";

import service_1 from "../../../assets/img/services/service-1.jpg";
import service_2 from "../../../assets/img/services/service-2.jpg";
import service_3 from "../../../assets/img/services/service-3.jpg";
import service_4 from "../../../assets/img/services/service-4.jpg";
import service_5 from "../../../assets/img/services/service-5.jpg";
import service_6 from "../../../assets/img/services/service-6.jpg";

export function Card1() {
  return (
    <div className='item'>
      <div className='service-card style1'>
        <div className='service-img'>
          <img src={service_1} alt='service' />
        </div>
        <div className='service-info'>
          <span className='service-blur-icon'>
            <i className='flaticon-finger-print'></i>
          </span>
          <span className='service-icon'>
            <i className='flaticon-finger-print'></i>
          </span>
          <h3 className='service-title'>
            <Link to='service-details.html'>Finger Print Access</Link>
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur selised do eiusmod tempor
            incididunt ut lab et aaliqua. Quis ipsum suspendisse eiusmod
          </p>
          <Link to='service-details.html' class='btn style2'>
            <span>Learn More</span>
            <i className='flaticon-right-arrow-1'></i>
          </Link>
        </div>
      </div>
    </div>
  );
}

export function Card2() {
  return (
    <div className='item'>
      <div className='service-card style1'>
        <div className='service-img'>
          <img src={service_2} alt='service' />
        </div>
        <div className='service-info'>
          <span className='service-blur-icon'>
            <i className='flaticon-face'></i>
          </span>
          <span className='service-icon'>
            <i className='flaticon-face'></i>
          </span>
          <h3 className='service-title'>
            <Link to='service-details.html'>Closed Circuit Cameras</Link>
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur selised do eiusmod tempor
            incididunt ut lab et aaliqua. Quis ipsum suspendisse eiusmod
          </p>
          <Link to='service-details.html' class='btn style2'>
            <span>Learn More</span>
            <i className='flaticon-right-arrow-1'></i>
          </Link>
        </div>
      </div>
    </div>
  );
}

export function Card3() {
  return (
    <div className='item'>
      <div className='service-card style1'>
        <div className='service-img'>
          <img src={service_3} alt='service' />
        </div>
        <div className='service-info'>
          <span className='service-blur-icon'>
            <i className='flaticon-cctv'></i>
          </span>
          <span className='service-icon'>
            <i className='flaticon-cctv'></i>
          </span>
          <h3 className='service-title'>
            <Link to='service-details.html'>CCTV Installation</Link>
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur selised do eiusmod tempor
            incididunt ut lab et aaliqua. Quis ipsum suspendisse eiusmod
          </p>
          <Link to='service-details.html' class='btn style2'>
            <span>Learn More</span>
            <i className='flaticon-right-arrow-1'></i>
          </Link>
        </div>
      </div>
    </div>
  );
}

export function Card4() {
  return (
    <div className='item'>
      <div className='service-card style1'>
        <div className='service-img'>
          <img src={service_4} alt='service' />
        </div>
        <div className='service-info'>
          <span className='service-blur-icon'>
            <i className='flaticon-home-1'></i>
          </span>
          <span className='service-icon'>
            <i className='flaticon-home-1'></i>
          </span>
          <h3 className='service-title'>
            <Link to='service-details.html'>Smart Home System</Link>
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur selised do eiusmod tempor
            incididunt ut lab et aaliqua. Quis ipsum suspendisse eiusmod
          </p>
          <Link to='service-details.html' className='btn style2'>
            <span>Learn More</span>
            <i class='flaticon-right-arrow-1'></i>
          </Link>
        </div>
      </div>
    </div>
  );
}

export function Card5() {
  return (
    <div className='item'>
      <div className='service-card style1'>
        <div className='service-img'>
          <img src={service_5} alt='service' />
        </div>
        <div className='service-info'>
          <span className='service-blur-icon'>
            <i className='flaticon-shield'></i>
          </span>
          <span className='service-icon'>
            <i className='flaticon-shield'></i>
          </span>
          <h3 className='service-title'>
            <Link to='service-details.html'>Security Consulting</Link>
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur selised do eiusmod tempor
            incididunt ut lab et aaliqua. Quis ipsum suspendisse eiusmod
          </p>
          <Link to='service-details.html' className='btn style2'>
            <span>Learn More</span>
            <i className='flaticon-right-arrow-1'></i>
          </Link>
        </div>
      </div>
    </div>
  );
}

export function Card6() {
  return (
    <div className='item'>
      <div className='service-card style1'>
        <div className='service-img'>
          <img src={service_6} alt='service' />
        </div>
        <div className='service-info'>
          <span className='service-blur-icon'>
            <i className='flaticon-analytics'></i>
          </span>
          <span className='service-icon'>
            <i className='flaticon-analytics'></i>
          </span>
          <h3 className='service-title'>
            <Link to='service-details.html'>Video Analytics System</Link>
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur selised do eiusmod tempor
            incididunt ut lab et aaliqua. Quis ipsum suspendisse eiusmod
          </p>
          <Link to='service-details.html' className='btn style2'>
            <span>Learn More</span>
            <i className='flaticon-right-arrow-1'></i>
          </Link>
        </div>
      </div>
    </div>
  );
}
