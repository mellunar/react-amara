import React, {useContext} from "react";
import './PageShoppingCart.css';
import { CartContext } from "Contexts/Contexts";
import ShopCartItem from "./ShopCartItem/ShopCartitem";

const ShopCartList = ({totalValue}) => {
  const {shoppingCart} = useContext(CartContext);

  return(
    <ul className='cart-content'>
      <li className='cart-empty'>O carrinho está vazio</li>
      {shoppingCart.map((item, index)=> <ShopCartItem key={index} prodId={item.productId} index={index} size={item.productSize} />)}
    </ul>
  )
};

export default ShopCartList;