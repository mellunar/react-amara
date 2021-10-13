import React from "react";
import './LoadingSlide.css';
import slideload from 'Resources/slideload.png';

const LoadingSlide = ({onError}) => {
  return(
    <article className='loading-slide'>
      <div className='loading-image'>
        <img alt='carregando' src={slideload} />
        {onError === undefined && <div className='loading-error'><p>Algo deu errado.</p><p>Recarregue a página ou tente novamente mais tarde.</p></div>}
      </div>
      <div className='loading-info'>
        <div className='loading-title'></div>
        <div className='loading-title'></div>
        <div className='loading-price'></div>
        <div className='loading-payment'></div>
      </div>
    </article>
  )
};

export default LoadingSlide;