import React from "react";
import './Homepage.css';
import MainSlider from "./Main Slider/MainSlider";
import { MainSlides } from "./Main Slider/MainSlides";
import ProductCarousel from "Components/UI/Carousel/ProductCarousel";

const FinalHomepage = () => {

  return(
    <>
      <header className='homepage-header'>
        <MainSlider source={MainSlides} />
      </header>
      <main className='page-main'>
        <ProductCarousel heading='Lançamentos' />
      </main>
    </>
  )
}

export default FinalHomepage;