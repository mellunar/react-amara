import React from "react";
import './Carousel.css';
import Carousel from "react-multi-carousel";
import ProductSlide from "./ProductSlide";
import ButtonGroup from "./ButtonGroup";

const ProductCarousel = ({heading, productArray}) => {
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
      {heading && <h2 className='product-carousel-heading'>{heading}</h2>}
      <Carousel responsive={responsive} minimumTouchDrag={80} customButtonGroup={<ButtonGroup />} renderButtonGroupOutside arrows={false}>
        {productArray.map((slide,i) => <ProductSlide source={slide} key={i} />)}
      </Carousel>
    </section>
  )
};

export default ProductCarousel;