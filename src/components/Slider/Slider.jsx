import React, { useEffect, useState, createContext} from "react";
import Dots from './Dots';
import SlidesList from './SlideList';


export const SliderContext = createContext();
const Slider = function ({width, height, autoPlay, autoPlayTime}) {
    const [items, setItems] = useState ([]);
    const [slide, setSlide] = useState (0);
    const [touchPosition, setTouchPosition] = useState (null);


}

