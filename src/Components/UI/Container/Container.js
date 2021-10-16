import React, {useEffect, useState} from "react";
import Topnav from "../Topnav/Topnav";
import Footer from "../Footer/Footer";
import LoginModal from "Components/LoginModal/LoginModal";
import { LoginContext } from "Contexts/LoginContext";
import { useLocation } from 'react-router-dom';

const UIContainer = ({children}) => {
  const [modalStatus,setModalStatus] = useState(null);
  const location = useLocation();

  function closeModal(){
    setModalStatus(null);
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname]);

  return(
    <LoginContext.Provider value={{modalStatus,setModalStatus}}>
      <Topnav />
      {children}
      <Footer />
      <LoginModal status={modalStatus} closeModal={closeModal} />
    </LoginContext.Provider>
  )
};

export default UIContainer;