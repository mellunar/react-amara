import React, {useState} from "react";
import Topnav from "../Topnav/Topnav";
import Footer from "../Footer/Footer";
import LoginModal from "Components/LoginModal/LoginModal";
import { LoginContext } from "Contexts/LoginContext";

const UIContainer = ({children}) => {
  const [modalStatus,setModalStatus] = useState(null);

  function closeModal(){
    setModalStatus(null);
  }

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