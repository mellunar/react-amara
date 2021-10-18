import React from "react";
import UIContainer from "Components/UI/Container/Container";
import './PageShoppingCart.css';
import ShopCartList from "./ShopCartList";

const PageShoppingCart = () => {
  document.title = 'Carrinho de compras - Amara'

  return(
    <UIContainer>
      <main className='cart-main'>
        <h1 className='cart-title'>Meu carrinho</h1>
          <ShopCartList />
          <div className=''></div>
      </main>
    </UIContainer>
  )
};

export default PageShoppingCart;