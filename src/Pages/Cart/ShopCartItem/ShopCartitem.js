import React, {useContext, useEffect, useState} from "react";
import './ShopCartItem.css';
import { CartContext } from "Contexts/Contexts";
import { db } from "Firebase/Firebase";

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
        <p>{item.title}</p>
        <p>Tamanho: {size}</p>
        <button onClick={()=>cartDispatch({ type: "remove", index })}>remover</button>
      </li>}
    </>
  )
};

export default ShopCartItem;