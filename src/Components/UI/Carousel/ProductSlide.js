import React, {useState} from "react";
import './Carousel.css';
import { Link } from "react-router-dom";

const ProductSlide = ({source}) => {
  const [fav, setFav] = useState('heart');

  const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2
  });

  return(
    <article className='product-carousel-slide'>
      <img alt={source.title} src={source.img} />
      <div className='product-slide-info'>
        <h3 className='product-carousel-title'>{source.title}</h3>
        {source.discount > 0 && <div className='product-slide-discount' aria-label={`com ${source.discount}% de desconto`}>-{source.discount}%</div>}
        <div className='product-carousel-price'><b>{formatter.format(source.price)}</b><br />em até {source.portion}x de {formatter.format(source.price/source.portion)} sem juros</div>
      </div>
      <button className='product-carousel-fav'><i className={`bi bi-${fav}`} aria-label='adicionar aos favoritos' onMouseEnter={()=>setFav('heart-fill')} onMouseLeave={()=>setFav('heart')} /></button>
      <Link to={source.url} className='linkfill' onDragStart={(e)=>e.preventDefault()} />
    </article>
  )
};

export default ProductSlide;