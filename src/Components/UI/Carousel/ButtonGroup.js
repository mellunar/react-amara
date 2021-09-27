import React from "react";
import './MainSlider.css';

const ButtonGroup = ({ next, previous, ...rest }) => {
  const {
    carouselState: { currentSlide, totalItems, slidesToShow }
  } = rest;

  return (
    <div className="carousel-button-group">
      <button aria-label="Go to previous slide"
      className={currentSlide === 0 ? "disable" : "react-multiple-carousel__arrow react-multiple-carousel__arrow--left"}
      onClick={() => previous()}>
      </button>
      <button aria-label="Go to next slide" 
      className={currentSlide === totalItems - slidesToShow ? "disable" : "react-multiple-carousel__arrow react-multiple-carousel__arrow--right"}
      onClick={() => next()}>
      </button>
    </div>
);
};

export default ButtonGroup;

/*
<Carousel
  responsive={responsive}
  arrows
  additionalTransfrom={0}
  itemClass={"react-carousel-item"}
  minimumTouchDrag={80}
  partialVisible
  renderButtonGroupOutside
  customButtonGroup={<ButtonGroup
    next={this.props.next}
    previous={this.props.previous}
    rest={this.props.rest}
  />}
>
*/