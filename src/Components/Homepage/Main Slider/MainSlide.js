import React from "react";
import { Link } from "react-router-dom";
import './MainSlider.css';

const MainSlide = ({item}) => {

  return(
    <article className='main-slide' key={item.title}>
      <h2 className='main-slide-title'>{item.title}</h2>
      <div className='main-slide-img-container'>
        <img alt={item.title} src={item.img} />
        {item.off && item.off !== '' && item.off !== 0 && item.off !== '0' && <div className='main-slide-discount'>-{item.off}%</div>}
      </div>
      <div className='main-slide-info-container'>
        <p className='main-slide-subtitle'>{item.desc}</p>
        <Link to='/' className='main-slide-button' onDragStart={(e) => e.preventDefault()}>Comprar</Link>
      </div>
      
    </article>
  )
};

export default MainSlide;