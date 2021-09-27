import React from "react";
import './MainSlider.css';

const MainButtonGroup = ({next, previous}) => {

  return (
    <div className="main-slider-button-group">
      <button className='main-slider-button-dir' onClick={() => previous()}><i className="bi bi-chevron-left" aria-label="Anterior" /></button>
      <button className='main-slider-button-dir' onClick={() => next()}><i className="bi bi-chevron-right" aria-label="Próximo" /></button>
    </div>
);
};

export default MainButtonGroup;