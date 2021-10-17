import React, {useEffect, useReducer, useState} from "react";
import Topnav from "../Topnav/Topnav";
import Footer from "../Footer/Footer";
import LoginModal from "Components/LoginModal/LoginModal";
import { LoginContext, CartContext } from "Contexts/Contexts";
import { useLocation } from 'react-router-dom';

const UIContainer = ({children}) => {
  const [modalStatus,setModalStatus] = useState(null);
  const [cartStatus,setCartStatus] = useState(null);
  const [shoppingCart, cartDispatch] = useReducer(cartUpdate, [], (initial) => JSON.parse(localStorage.getItem("items")) || initial);
  const location = useLocation();

  function cartUpdate(state, action){
    switch (action.type) {
      case "add": return [...state, action.data];
      case "remove": return state.filter((_, index) => index !== action.index);
      default: return state;
    }
  };

  function closeModal(){
    setModalStatus(null);
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname]);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(shoppingCart));
    // eslint-disable-next-line
  }, [shoppingCart]);

  return(
    <LoginContext.Provider value={{modalStatus,setModalStatus}}>
      <CartContext.Provider value={{shoppingCart,cartDispatch,cartStatus,setCartStatus}}>
        <Topnav />
        <LoginModal status={modalStatus} closeModal={closeModal} />
        {children}
        <Footer />
      </CartContext.Provider>
    </LoginContext.Provider>
  )
};

export default UIContainer;