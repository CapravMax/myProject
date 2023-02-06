import React from "react";
import { Link } from "react-router-dom";
import { TbArrowNarrowRight } from "react-icons/tb";
import './Button.scss'

export function  Button () {

    return (
        

            <Link to='about.html' class='button'>
              <span>Learn More</span>
              <TbArrowNarrowRight className="button_arrow"/>
              
            </Link>

       
    )
}

