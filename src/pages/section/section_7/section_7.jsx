import React from "react";
import "./section_7.scss";

function Section7 () {

    return (
<div class="counter-wrap style1 bg-f counter-bg-1 pt-100 pb-75">
        <div class="overlay op-8 bg-russian"></div>
        <div class="container pos-rel">
          <div class="row justify-content-center">
            <div class="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-6">
              <div class="counter-card style1">
                <span class="counter-icon"
                  ><i class="flaticon-calendar-2"></i
                ></span>
                <div class="counter-info">
                  <h2><span class="odometer" data-count="16">00</span></h2>
                  <p>Years On The Market</p>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-6">
              <div class="counter-card style1">
                <span class="counter-icon bg-overlay"
                  ><i class="flaticon-group"></i
                ></span>
                <div class="counter-info">
                  <h2><span class="odometer" data-count="120">00</span></h2>
                  <p>Professional Team</p>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-6">
              <div class="counter-card style1">
                <span class="counter-icon bg-overlay"
                  ><i class="flaticon-technology"></i
                ></span>
                <div class="counter-info">
                  <h2><span class="odometer" data-count="860">00</span></h2>
                  <p>Dealer Equipment</p>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-6">
              <div class="counter-card style1">
                <span class="counter-icon bg-overlay"
                  ><i class="flaticon-target"></i
                ></span>
                <div class="counter-info">
                  <h2><span class="odometer" data-count="500">00</span></h2>
                  <p>Business Objects</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    )
}

export default Section7;