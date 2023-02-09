import React, {useContext} from "react";
import{SliderContext} from 'Slider';
import './dot.scss';

export default function Dot ({number}) {
    const {goToSlide, slideNumber} = useContext (SliderContext);

    return (

        <div classname ={`dot ${slideNumber ===number ? "selected" : ""}`}
            onClick ={ () => goToSlide (number)}/>
        

    )
}