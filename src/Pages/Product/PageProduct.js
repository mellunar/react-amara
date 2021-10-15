import React from "react";
import { useParams } from "react-router-dom";
import UIContainer from "Components/UI/Container/Container";
import FinalPageProduct from "./Components/FinalPageProduct";

const PageProduct = () => {
  const {prodId} = useParams();

  return(
    <UIContainer>
      <FinalPageProduct prodId={prodId} />
    </UIContainer>
  )
};

export default PageProduct;