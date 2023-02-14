import React, {useContext} from "react";
import Slide from './Slider';
import { SliderContext } from "./Slider";

import "./SlideList"

export default function SlidesList () {
    const {slideNumber, items} = useContext (SliderContext);

    return (

        <div className="slide-list"
        style = {{transform: `translateX (-${slideNumber*100}%)`}}>

            {items.map((slide, index) =>(
                <Slide key={index} data = {slide}/>
            ))}
        </div>
    )
}