import React, {useContext,useState} from "react";
import './Carousel.css';
import { Link } from "react-router-dom";
import { LoginContext } from "Contexts/LoginContext";

const ProductSlide = ({product}) => {
  const [fav, setFav] = useState('');
  const {setModalStatus} = useContext(LoginContext);

  const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2
  });

  function favItem(){
    setModalStatus(true)
  };

  return(
    <article className='product-carousel-slide'>
      <img alt={product.title} src={product.img} />
      <div className='product-slide-info'>
        <h3 className='product-carousel-title'>{product.title}</h3>
        {product.discount > 0 && <div className='product-slide-discount' aria-label={`com ${product.discount}% de desconto`}>-{product.discount}%</div>}
        <div className='product-carousel-price'><b>{formatter.format(product.price)}</b><br />em até {product.portion}x de {formatter.format(product.price/product.portion)} sem juros</div>
      </div>
      <button className='product-carousel-fav'><i className={`bi bi-heart${fav}`} aria-label='adicionar aos favoritos' onMouseEnter={()=>setFav('-fill')} onMouseLeave={()=>setFav('')} onClick={()=>favItem()} /></button>
      <Link to={product.url} className='linkfill' onDragStart={(e)=>e.preventDefault()} />
    </article>
  )
};

export default ProductSlide;