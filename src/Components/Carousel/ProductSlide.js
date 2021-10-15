import React from "react";
import './Carousel.css';
import { Link } from "react-router-dom";
import { formatter } from "Utils/PriceFormatter";
import { LoginContext } from "Contexts/LoginContext";
import FavoriteButton from "Components/UI/FavoriteButton/FavoriteButton";

const ProductSlide = ({product}) => {

  return(
    <article className='product-carousel-slide'>
      <img alt={product.title} src={product.imgUrl} />
      <div className='product-slide-info'>
        <h3 className='product-carousel-title'>{product.title}</h3>
        {product.discount > 0 && <div className='product-slide-discount' aria-label={`com ${product.discount}% de desconto`}>-{product.discount}%</div>}
        <div className='product-carousel-price'>
          <p>{product.discount > 0 && <>de <span>{formatter.format(product.price)}</span> por</>} <b>{formatter.format(product.discount > 0 ? product.discountPrice : product.price)}</b></p>
          <p>em até {product.portion}x de {formatter.format(product.price/product.portion)} sem juros</p>
        </div>
      </div>
      <FavoriteButton className='product-carousel-fav' context={LoginContext} />
      <Link to={`/product/${product.id}`} className='linkfill' onDragStart={(e)=>e.preventDefault()} />
    </article>
  )
};

export default ProductSlide;