import React from "react";
import Topnav from "../Topnav/Topnav";

const UIContainer = ({children}) => {
  return(
    <>
      <Topnav />
      {children}
    </>
  )
};

export default UIContainer;