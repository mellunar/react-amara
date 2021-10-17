import React, {useContext, useEffect, useState, useRef} from "react";
import { Link } from "react-router-dom";
import { CartContext } from "Contexts/Contexts";
import { db } from "Firebase/Firebase";
import './TopCart.css';

const TopCartItem = ({index, prodId, size}) => {
  //const {cartDispatch} = useContext(CartContext);
  const [item, setItem] = useState(null);

  useEffect(()=>{
    fetchData();
    return () => {
      return null;
    }
    // eslint-disable-next-line
  },[prodId]);
  
  if(!item || item === undefined){
    return null
  };

  async function fetchData(){
    await db.collection('amara')
    .doc(prodId)
    .get()
    .then((doc) => {
      setItem(doc.data());
    })
    .catch((error) => {
      console.log(error)
    });
  };

  return(
    <li className='topcart-item'>
      <div className='topcart-img'><img alt='' src={item.images[0]} /></div>
      <div className='topcart-info'>
        <div className='topcart-itemname'>{item.title}</div>
        <div className='topcart-footer'>
          <span>Tamanho: <b>{size}</b></span>
          {/*<button className='topcart-remove' onClick={()=>cartDispatch({ type: "remove", index })}><i className="bi bi-cart-dash-fill" aria-label='remover' title='remover' /></button>*/}
        </div>
      </div>
    </li>
  )
};

const TopCart = ({scroll}) => {
  const {shoppingCart,cartStatus,setCartStatus} = useContext(CartContext);
  const topCart = useRef(null);

  useEffect(()=>{
    if(scroll === 'down'){
      setCartStatus(null)
    };
    document.addEventListener("mousedown", windowOnMouseDown);
    return () => {
      document.removeEventListener("mousedown", windowOnMouseDown);
    }
    // eslint-disable-next-line
  },[cartStatus]);

  if(!cartStatus || scroll === 'down'){
    return null
  };

  function windowOnMouseDown(event){
    if(cartStatus && event.target !== topCart.current){setCartStatus(null)}
  };

  return(
    <div className='topcart' ref={topCart}>
      <ul className='topcart-list'>
        {[...shoppingCart].reverse().map((item,index) => index < 1 && <TopCartItem key={index} index={shoppingCart.map(x=>{return x.productId}).indexOf(item.productId)} prodId={item.productId} size={item.productSize} />)}
      </ul>
      <Link className='topcart-link' to='/'>Ir para o carrinho</Link>
    </div>
  )
};

export default TopCart;