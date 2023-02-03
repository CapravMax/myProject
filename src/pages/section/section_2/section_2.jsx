import React from "react";
import { Link } from "react-router-dom";
import { TbHome, TbBriefcase, TbInfoCircle } from "react-icons/tb";
import "./section_2.scss";

export function Section2() {
  return (
    <section className='block2'>
      <div className='block2_row'>
        <div className='block2_row_card'>
          <span className='block2_row_card_icon'>
            <TbHome className='block2_row_card_icon_end' />
          </span>
          <span className='block2_row_card_count'>01</span>
          <div className='block2_row_card_info'>
            <h3>
              <Link to='service-details.html'>Home Security</Link>
            </h3>
            <p>
              Lorem ipsum dolor sit amet, contur selisica do mod tempor incidunt
              ut labet aliqua at quis sit ipsum suspensse dolor sit amet.
            </p>
          </div>
        </div>

        <div className='block2_row_card'>
          <span className='block2_row_card_icon'>
            <TbBriefcase className='block2_row_card_icon_end' />
          </span>
          <span className='block2_row_card_count'>02</span>
          <div className='block2_row_card_info'>
            <h3>
              <Link to='service-details.html'>Business Security</Link>
            </h3>
            <p>
              Lorem ipsum dolor sit amet, contur selisica do mod tempor incidunt
              ut labet aliqua at quis sit ipsum suspensse dolor sit amet.
            </p>
          </div>
        </div>

        <div className='block2_row_card'>
          <span className='block2_row_card_icon'>
            <TbInfoCircle className='block2_row_card_icon_end' />
          </span>
          <span className='block2_row_card_count'>03</span>
          <div className='block2_row_card_info'>
            <h3>
              <Link to='service-details.html'>Information Security</Link>
            </h3>
            <p>
              Lorem ipsum dolor sit amet, contur selisica do mod tempor incidunt
              ut labet aliqua at quis sit ipsum suspensse dolor sit amet.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
