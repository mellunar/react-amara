import React from "react";
import './Carousel.css';
import Carousel from "react-multi-carousel";
import ProductSlide from "./ProductSlide";
import ButtonGroup from "./ButtonGroup";
import LoadingSlide from "./LoadingSlide";

const ProductCarousel = ({className, heading, productArray}) => {
  let dummy = [];
  
  for(let i=1; i<6; i++){
    dummy.push(i)
  };  

  const responsive = {
    mobileSmall: {
      breakpoint: { max: 599, min: 0 },
      items: 2,
      slidesToSlide: 2
    },
    mobile: {
      breakpoint: { max: 768, min: 600 },
      items: 3,
      slidesToSlide: 3
    },
    mobileWide: {
      breakpoint: { max: 1023, min: 769 },
      items: 4,
      slidesToSlide: 4
    },
    desktop: {
      breakpoint: { max: 1920, min: 1024 },
      items: 5,
      slidesToSlide: 5
    }
  };

  return(
    <section className='product-carousel'>
      {heading && <h2 className={`product-carousel-heading ${className}`}>{heading}</h2>}
      {productArray && productArray !== undefined && <Carousel responsive={responsive} minimumTouchDrag={80} customButtonGroup={<ButtonGroup />} renderButtonGroupOutside arrows={false}>
        {productArray !== null && productArray.length > 0 ? productArray.map((slide,i) => <ProductSlide product={slide} key={i} />) : dummy.map((slide) => <LoadingSlide key={slide} onError={productArray} />)}
      </Carousel>}
    </section>
  )
};

export default ProductCarousel;