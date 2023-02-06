import React from "react";
import {Button} from "../../../components/Button/Button"
import { TbCheckbox } from "react-icons/tb";

import "./section_3.scss";

import cctv from "../../../assets/img/about/cctv-1.png"

export function Section3() {

  return (
    <section className='about'>
      <img src= {cctv} alt='videocamera' className='about_cctv'/>
      
       
          <div className='about_wrap'>
            <div className='about_wrap_image'>
              <div className='about_wrap_image_1'></div>
              <div className='about_wrap_image_2'></div>
            </div>
          
          
            <div className='about_wrap_content'>
              <div className='about_wrap_content_title'>
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
              <ul className='about_wrap_content_list'>
                <li>
                  
                  <h5><span>
                    <TbCheckbox className = 'about_wrap_content_list_checkbox'/>
                  </span> Schedule Your Tasks
                  </h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectur dolor adicing elit,
                    sed do eiusmod sit tempor incidunt ut aliqua dolor amet sit
                    adhoc.
                  </p>
                </li>
                <li>
                  
                  <h5><span>
                    <TbCheckbox className = 'about_wrap_content_list_checkbox'/>
                  </span> Manage By Control Panel</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectur dolor adicing elit,
                    sed do eiusmod sit tempor incidunt ut aliqua dolor amet sit
                    adhoc.
                  </p>
                </li>
                <li>
                  
                  <h5><span>
                    <TbCheckbox className = 'about_wrap_content_list_checkbox'/>
                  </span> Smarter Wireless Applications</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectur dolor adicing elit,
                    sed do eiusmod sit tempor incidunt ut aliqua dolor amet sit
                    adhoc.
                  </p>
                </li>
              </ul>
              <Button/>
            </div>
          </div>
        
      
    </section>
  );
}


