import React from "react";
import "./section_3.scss"

function Section3 () {

    return (
        <section class="about-wrap style1 ptb-100 bg-f about-bg-1">
        <img
          src="assets/img/about/cctv-1.png"
          alt="Image"
          class="about-shape-1 lg-none"
        />
        <div class="container">
          <div class="row gx-5">
            <div class="col-xl-6">
              <div class="about-img-wrap">
                <div class="about-img-1 bg-f"></div>
                <div class="about-img-2 bg-f"></div>
              </div>
            </div>
            <div class="col-xl-6">
              <div class="about-content">
                <div class="content-title style1 mb-15">
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
                <ul class="feature-list style1 list-style">
                  <li>
                    <span><i class="flaticon-checkmark"></i></span>
                    <h5>Schedule Your Tasks</h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectur dolor adicing elit,
                      sed do eiusmod sit tempor incidunt ut aliqua dolor amet
                      sit adhoc.
                    </p>
                  </li>
                  <li>
                    <span><i class="flaticon-checkmark"></i></span>
                    <h5>Manage By Control Panel</h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectur dolor adicing elit,
                      sed do eiusmod sit tempor incidunt ut aliqua dolor amet
                      sit adhoc.
                    </p>
                  </li>
                  <li>
                    <span><i class="flaticon-checkmark"></i></span>
                    <h5>Smarter Wireless Applications</h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectur dolor adicing elit,
                      sed do eiusmod sit tempor incidunt ut aliqua dolor amet
                      sit adhoc.
                    </p>
                  </li>
                </ul>
                <a href="about.html" class="btn style1"
                  ><span>Learn More</span> <i class="flaticon-right-arrow-1"></i
                ></a>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Section3