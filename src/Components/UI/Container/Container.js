import React from "react";
import Topnav from "../Topnav/Topnav";
import Footer from "../Footer/Footer";

const UIContainer = ({children}) => {
  return(
    <>
      <Topnav />
      {children}
      <Footer />
    </>
  )
};

export default UIContainer;