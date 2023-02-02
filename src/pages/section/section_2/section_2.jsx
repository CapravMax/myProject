import React from "react";
import "./section_2.scss";

function Section2 () {

    return (
        <section class="category-wrap pt-100 pb-75">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-4 col-md-6">
              <div class="category-card bg-russian">
                <span class="cat-count">01</span>
                <span class="cat-icon"><i class="flaticon-home-1"></i></span>
                <div class="cat-info">
                  <h3><a href="service-details.html">Home Security</a></h3>
                  <p>
                    Lorem ipsum dolor sit amet, contur selisica do mod tempor
                    incidunt ut labet aliqua at quis sit ipsum suspensse dolor
                    sit amet.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="category-card bg-russian">
                <span class="cat-count">02</span>
                <span class="cat-icon"><i class="flaticon-portfolio"></i></span>
                <div class="cat-info">
                  <h3><a href="service-details.html">Business Security</a></h3>
                  <p>
                    Lorem ipsum dolor sit amet, contur selisica do mod tempor
                    incidunt ut labet aliqua at quis sit ipsum suspensse dolor
                    sit amet.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="category-card bg-russian">
                <span class="cat-count">03</span>
                <span class="cat-icon"
                  ><i class="flaticon-information"></i
                ></span>
                <div class="cat-info">
                  <h3>
                    <a href="service-details.html">Information Security</a>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, contur selisica do mod tempor
                    incidunt ut labet aliqua at quis sit ipsum suspensse dolor
                    sit amet.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    )
}

export default Section2


