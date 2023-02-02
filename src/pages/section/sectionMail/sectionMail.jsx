import React from "react";
import './sectionMail.scss';

function SectionMail () {

    return (
      <div class="container">
        <div class="newsleter-wrap style1">
          <div class="row align-items-center">
            <div class="col-lg-6">
              <div class="content-title style1">
                <h2>Subscribe To Our Newsletter</h2>
              </div>
            </div>
            <div class="col-lg-6">
              <form action="#" class="newsletter-form">
                <input type="email" placeholder="Your Email Address*" />
                <button type="submit">
                  Subscribe <i class="flaticon-right-arrow"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>  
    )
}

export default SectionMail;