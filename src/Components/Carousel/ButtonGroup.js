import React from "react";
import './Carousel.css';

const ButtonGroup = ({ next, previous, ...rest }) => {
  const {
    carouselState: { currentSlide, totalItems, slidesToShow }
  } = rest;

  return (
    <div className="product-carousel-arrow-group">
      <button className={`product-slide-arrow product-slide-left-arrow ${currentSlide === 0 ? 'product-slide-arrow-disabled' : ''}`} onClick={() => previous()}><i className="bi bi-chevron-left" aria-label="Voltar" /></button>
      <button className={`product-slide-arrow product-slide-right-arrow ${currentSlide === totalItems - slidesToShow ? 'product-slide-arrow-disabled' : ''}`} onClick={() => next()}><i className="bi bi-chevron-right" aria-label="Avançar" /></button>
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