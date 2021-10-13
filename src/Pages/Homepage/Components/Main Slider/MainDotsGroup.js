import React from "react";
import './MainSlider.css';

const MainSliderDot = ({onMove, index, onClick, active}) => {
  return(
    <button className={`main-slider-dot${active ? ' main-slider-dot-active' : ''}`} onClick={() => onClick()} aria-label={`ir para slide ${index+1}`}></button>
  )
};

export default MainSliderDot;