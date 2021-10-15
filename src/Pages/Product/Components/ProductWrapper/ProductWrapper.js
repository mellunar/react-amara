import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import './ProductWrapper.css';
import { formatter } from "Utils/PriceFormatter";
import { LoginContext } from "Contexts/LoginContext";
import ReactMarkdown from "react-markdown";
import Button from "Components/UI/Button/Button";
import FavoriteButton from "Components/UI/FavoriteButton/FavoriteButton";

const ProductWrapper = ({product, prodId}) => {
  const [productSize, setProductSize] = useState(null);
  const [submitError, setSubmitError] = useState(null);
  const history = useHistory();
  const sizes =['PP','P','M','G','GG','XG','G1','G2','G3'];

  function sizesSort(){
    let arr = [];
    sizes.forEach((size)=>{
      if(product.sizes.includes(size)){
        arr.push(size)
      }
    });
    return arr
  };

  function onChange(e){
    if(e.target.name === 'productSize'){
      setProductSize(e.target.value);
      if(submitError){
        setSubmitError(null)
      }
    }
  };

  function changeColor(color){
    history.push(`/product/${color}`)
  };

  function addToCart(){
    if(productSize === null){
      return setSubmitError('Escolha um tamanho')
    };
    let values = {productSize: productSize, color: prodId};
    console.log(values)
  };

  const actualPrice = product.discount > 0 ? product.discountPrice : product.price;

  return(
    <article className='product-wrapper'>
      <div className='product-image'>
        <img alt={product.title} src={product.images[0]} />
      </div>
      <div className='product-info'>
        <h1 className='product-title'>{product.title}</h1>
        <FavoriteButton className='product-favorite-button' context={LoginContext} />
        <div className='product-price'>
          {product.discount > 0 && <p>de <span>{formatter.format(product.price)}</span> por</p>}
          <h3 className='product-price-final'>{formatter.format(actualPrice)}</h3>
          {product.discount > 0 && <span className='product-price-discount'>{product.discount}% off</span>}
        </div>
        <p className='product-payment'>em até {product.portion}x de {formatter.format(actualPrice/product.portion)} sem juros</p>
        {product.numberOfColors > 0 && <>
          {product.numberOfColors > 0 && <h4 className='product-form-title'>Cor</h4>}
          {product.colors.map((color,i)=> 
          <button className={`product-color ${prodId.includes(color.id) ? 'product-color-active' : ''}`} key={i} style={{backgroundColor: `#${color.hex}`}} onClick={()=>changeColor(color.id)}>
            <span className='product-color-name'>{color.name}</span>
          </button>)}</>}
        <div className='product-size-heading'>
          <h4 className='product-form-title'>Escolha o tamanho</h4>
          <button className='product-size-guide'>Tabela de medidas</button>
        </div>
        {sizesSort().map((size)=> <label key={size} className='product-size-option' title={product.sizeamount[size] === 0 ? 'esgotado' : null}>
          <input type='radio' name='productSize' disabled={product.sizeamount[size] === 0 ? true : false} onChange={onChange} value={size} />
          <span className='product-size-option-text'>{size}</span>
        </label>)}
        {submitError && <p className='product-submit-error'>{submitError}</p>}
        <Button component='button' className='ui-button-light product-add-bag' onClick={()=>addToCart()}>Adicionar ao carrinho</Button>
        <ReactMarkdown className='product-description'>{product.desc}</ReactMarkdown>
      </div>
    </article>
  )
};

export default ProductWrapper;