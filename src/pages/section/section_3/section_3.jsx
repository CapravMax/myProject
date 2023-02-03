import React from "react";
import { Link } from "react-router-dom";
import "./section_3.scss";

import cctv from "../../../assets/img/about/cctv-1.png"

export function Section3() {

  return (
    <section className='about-wrap style1 ptb-100 bg-f about-bg-1'>
      <img src= {cctv} alt='videocamera' className='about-shape-1 lg-none'/>
      <div className='container'>
        <div className='row gx-5'>
          <div className='col-xl-6'>
            <div className='about-img-wrap'>
              <div className='about-img-1 bg-f'></div>
              <div className='about-img-2 bg-f'></div>
            </div>
          </div>
          <div className='col-xl-6'>
            <div className='about-content'>
              <div className='content-title style1 mb-15'>
                <span>About us</span>
                <h2>
                  Dedicated Team With Ontime Response The Leader In Protecting
                </h2>
              </div>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
                quas tenetur, id quam ab eligendi nostrum eum temporibus
                delectus! Odit debitis aliquam esse hic vel ipsam id quisquam
                assumenda dolorum.
              </p>
              <ul className='feature-list style1 list-style'>
                <li>
                  <span>
                    <i className='flaticon-checkmark'></i>
                  </span>
                  <h5>Schedule Your Tasks</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectur dolor adicing elit,
                    sed do eiusmod sit tempor incidunt ut aliqua dolor amet sit
                    adhoc.
                  </p>
                </li>
                <li>
                  <span>
                    <i className='flaticon-checkmark'></i>
                  </span>
                  <h5>Manage By Control Panel</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectur dolor adicing elit,
                    sed do eiusmod sit tempor incidunt ut aliqua dolor amet sit
                    adhoc.
                  </p>
                </li>
                <li>
                  <span>
                    <i className='flaticon-checkmark'></i>
                  </span>
                  <h5>Smarter Wireless Applications</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectur dolor adicing elit,
                    sed do eiusmod sit tempor incidunt ut aliqua dolor amet sit
                    adhoc.
                  </p>
                </li>
              </ul>
              <Link to ='about.html' class='btn style1'>
                <span>Learn More</span> <i className='flaticon-right-arrow-1'></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


