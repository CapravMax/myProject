import React from "react";
import { TbArrowNarrowRight } from "react-icons/tb";
import {Button} from "../../../components/Button/Button"
import "./section_1.scss";

import hero_slider_1 from "../../../assets/img/hero/hero-slider-1.png";
import hero_slider_2 from "../../../assets/img/hero/hero-slider-2.png";
import hero_slider_3 from "../../../assets/img/hero/hero-slider-3.png";
import hero_thumb_1 from "../../../assets/img/hero/hero-thumb-1.png";
import hero_thumb_3 from "../../../assets/img/hero/hero-thumb-3.png";
import hero_thumb_2 from "../../../assets/img/hero/hero-thumb-2.png";

export function Section1() {
  return (
    <section className='hero'>
      <div className='hero_overlay'>
        <div className='hero_overlay_block'>
          <div className='hero_overlay_block_content'>
            <span className ="hero_overlay_block_content_about" data-aos='fade-up' data-aos-duration='1000'>
              Video Security Company
            </span>

            <h1
              data-aos='fade-up'
              data-aos-duration='1000'
              data-aos-delay='500'>
              A New Freedom Of Security Enjoy The
              <span> Security Of Joy</span>
            </h1>
            <p data-aos='fade-up' data-aos-duration='1000' data-aos-delay='800'>
              Lorem ipsum dolor sit amet, consectetur adiscing elit, sed do
              suspendisse tempor incididunt labore et dolore magna aliqua. Quis
              ipsum eiusmod.
            </p>
            <Button/>
              
            

            
          </div>

          <div className='hero_overlay_block_tab'>
              <div className='hero_overlay_block_tab_pane' id='tab_1' role='tabpanel'>
                <div className='hero_overlay_block_tab_pane_item'>
                  <img src={hero_slider_1} alt='hero slider' />
                </div>
              </div>
              <div
                className='hhero_overlay_block_tab_pane_item_fade'
                id='tab_2'
                role='tabpanel'>
                <div className='hero_overlay_block_tab_pane_item'>
                  <img src={hero_slider_2} alt='hero slider' />
                </div>
              </div>
              <div
                className='hero_overlay_block_tab_pane_item_fade'
                id='tab_3'
                role='tabpanel'>
                <div className='hero_overlay_block_tab_pane_item'>
                  <img src={hero_slider_3} alt='hero-slider' />
                </div>
              </div>
            </div>
        </div>
        <div className='hero_overlay_tablist'>
          <span>
            Thumbnails <TbArrowNarrowRight/>
          </span>
          <ul className='hero_overlay_tablist_nav' role='tablist'>
            <li className='hero_overlay_tablist_nav_items'>
              <button
                className='hero_overlay_tablist_nav_items_link active'
                data-bs-toggle='tab'
                data-bs-target='#tab_1'
                type='button'
                role='tab'>
                <img src={hero_thumb_1} alt='hero-thumb' />
              </button>
            </li>
            <li class='hero_overlay_tablist_nav_items'>
              <button
                className='hero_overlay_tablist_nav_items_link'
                data-bs-toggle='tab'
                data-bs-target='#tab_2'
                type='button'
                role='tab'>
                <img src={hero_thumb_3} alt='hero thumb' />
              </button>
            </li>
            <li className='hero_overlay_tablist_nav_items'>
              <button
                className='hero_overlay_tablist_nav_items_link'
                data-bs-toggle='tab'
                data-bs-target='#tab_3'
                type='button'
                role='tab'>
                <img src={hero_thumb_2} alt='hero thumb' />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
