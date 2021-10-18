import React, {useContext, useEffect, useState} from "react";
import { Link } from "react-router-dom";
import './ShopCartItem.css';
import { CartContext } from "Contexts/Contexts";
import { db } from "Firebase/Firebase";
import { formatter } from "Utils/PriceFormatter";

const ShopCartItem = ({prodId, index, size}) => {
  const {cartDispatch} = useContext(CartContext);
  const [item, setItem] = useState(null);

  useEffect(()=>{
    fetchData();
    // eslint-disable-next-line
  },[prodId]);

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
    <>
      {item && item !== undefined && <li className='cart-item'>
        <div className='cart-item-img'><img alt='' src={item.images[0]} /></div>
        <div className='cart-item-info'>
          <p className='cart-item-name'><Link to={`/product/${prodId}`}>{item.title}</Link></p>
          <p>Tamanho: <b>{size}</b></p>
        </div>
        <div className='cart-item-info2'>
          <p className='cart-item-price'><b>{formatter.format(item.discount > 0 ? item.discountPrice : item.price)}</b></p>
          <div className='cart-item-button-container'>
            <button className='cart-item-button-remove' onClick={()=>cartDispatch({ type: "remove", index })}>
              <i className="bi bi-cart-dash-fill cart-button-icon" aria-hidden />
              <span>remover</span>
            </button>
          </div>
        </div>
      </li>}
    </>
  )
};

export default ShopCartItem;