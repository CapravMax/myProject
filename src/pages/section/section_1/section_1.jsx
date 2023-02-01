import React from "react";
import { Link } from "react-router-dom";
import hero_slider_1 from '../../../assets/img/hero/hero-slider-1.png';
import hero_slider_2 from '../../../assets/img/hero/hero-slider-2.png';
import hero_slider_3 from '../../../assets/img/hero/hero-slider-3.png';
import hero_thumb_1 from '../../../assets/img/hero/hero-thumb-1.png';
import hero_thumb_3 from '../../../assets/img/hero/hero-thumb-3.png';
import hero_thumb_2 from '../../../assets/img/hero/hero-thumb-2.png';

export function Section1 () {

    return (

<section className="hero-wrap style1 hero-bg-1">
        
        
            <div className="row gx-5 align-items-center">
                
                <div className="hero-content">
                    <span data-aos="fade-up" data-aos-duration="1000">Video Security Company
                    </span>
                
                <h1
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="500">A New Freedom Of Security Enjoy The
                  <span>Security Of Joy</span>
                </h1>
                <p
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="800">
                    Lorem ipsum dolor sit amet, consectetur adiscing elit, sed do
                  suspendisse tempor incididunt labore et dolore magna aliqua.
                  Quis ipsum eiusmod.
                </p>
                <Link to="about.html" class="btn style1">
                  <span>Learn More</span> 
                  <i class="flaticon-right-arrow-1"></i>
                </Link>
                </div>
            </div>

            <div className="tab-content hero-tab-content">
                <div className="tab-pane fade show active"
                  id="tab_1"
                  role="tabpanel">
                
                  <div className="hero-tab-item">
                    <img src={hero_slider_1} alt="hero slider" />
                  </div>
                </div>
                <div className="tab-pane fade" id="tab_2" role="tabpanel">
                  <div className="hero-tab-item">
                    <img src={hero_slider_2} alt="hero slider"/>
                  </div>
                </div>
                <div className="tab-pane fade" id="tab_3" role="tabpanel">
                  <div className="hero-tab-item">
                    <img src= {hero_slider_3} alt="hero-slider" />
                  </div>
                </div>
              </div>
              <div className="hero-tablist-wrap">
                <span>Thumbnails <i class="flaticon-right-arrow-1"></i></span>
                <ul className="nav nav-tabs hero-tablist" role="tablist">
                  <li className="nav-item">
                    <button
                      className="nav-link active"
                      data-bs-toggle="tab"
                      data-bs-target="#tab_1"
                      type="button"
                      role="tab">
                      <img src={hero_thumb_1} alt="hero-thumb" />
                    </button>
                  </li>
                  <li class="nav-item">
                    <button
                      className="nav-link"
                      data-bs-toggle="tab"
                      data-bs-target="#tab_2"
                      type="button"
                      role="tab">
                      <img src={hero_thumb_3} alt="hero thumb" />
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      className="nav-link"
                      data-bs-toggle="tab"
                      data-bs-target="#tab_3"
                      type="button"
                      role="tab">
                      <img src={hero_thumb_2} alt="hero thumb" />
                    </button>
                  </li>
                </ul>
              </div>
            
         
        
      </section>
      
    )
    }