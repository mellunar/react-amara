import React, {useEffect, useRef} from "react";
import './ProductImageSlider.css';
import Carousel from "react-multi-carousel";

const CustomArrow = ({direction, onClick}) => {
  return(
    <button className={`product-image-custom-arrow product-image-custom-arrow-${direction}`} onClick={() => onClick()}><i className={`bi bi-chevron-${direction}`} /></button>
  )
}

const ProductImageSlider = ({className, images, title}) => {
  let carousel = useRef(null);

  useEffect(()=>{
    carousel.goToSlide(0);
  },[title]);

  const responsive = {
    main: {
      breakpoint: { max: 1920, min: 0 },
      items: 1
    }
  };

  return(
    <Carousel className={className} ref={el => (carousel = el)} responsive={responsive} customLeftArrow={<CustomArrow direction='left' />} customRightArrow={<CustomArrow direction='right' />}>
      {images.map((image,index)=><img key={index} alt={title} src={image} />)}
    </Carousel>
  )
};

export default ProductImageSlider;