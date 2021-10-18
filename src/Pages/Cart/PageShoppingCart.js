import React, {useState} from "react";
import UIContainer from "Components/UI/Container/Container";
import './PageShoppingCart.css';
import ShopCartList from "./ShopCartList";
import Input from "Components/UI/Input/Input";
import Button from "Components/UI/Button/Button";

const PageShoppingCart = () => {
  const [val, setVal] = useState('');
  document.title = 'Carrinho de compras - Amara'

  function calculeShipping(e){
    e.preventDefault();
    console.log(val);
  };

  return(
    <UIContainer>
      <main className='cart-main'>
        <h1 className='cart-title'>Meu carrinho</h1>
          <div className='cart-wrapper'>
            <ShopCartList />
            <div className='cart-checkout'>
              <div className='cart-price-item'>
                <span>Subtotal:</span> <b>R$ 0,00</b>
              </div>
              <div className='cart-shipping'>
                <p>Frete e previsão de entrega</p>
                <form className='cart-shipping-postalcode' onSubmit={calculeShipping}>
                  <Input background='cart-shipping-postalcode-bg' onChange={(e)=>setVal(e.target.value)} type='number' name='cep' placeholder='Digite seu CEP sem traço' error='Campo obrigatório' altError='Digite um CEP válido' />
                  <Button component='button' className='ui-button-light cart-shipping-button' disabled={val.length !== 8 ? true : false}>calcular</Button>
                </form>
              </div>
              <div className='cart-price-item'>
                <span>Preço final:</span> <b>R$ 0,00</b>
              </div>
              <Button className='ui-button-light cart-checkout-button'>Finalizar compra</Button>
            </div>
          </div>
      </main>
    </UIContainer>
  )
};

export default PageShoppingCart;