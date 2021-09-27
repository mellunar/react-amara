import React from "react";
import './MainSlider.css';
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import MainButtonGroup from "./MainButtonGroup";
import MainSlide from "./MainSlide";
import MainSliderDot from "./MainDotsGroup";

const MainSlider = ({source}) => {
  const responsive = {
    main: {
      breakpoint: { max: 1920, min: 0 },
      items: 1
    }
  };

  return(
    <Carousel responsive={responsive} infinite customButtonGroup={<MainButtonGroup />} arrows={false} showDots customDot={<MainSliderDot />} autoPlay='true' autoPlaySpeed={10000}>
      {source.map((slide)=><MainSlide item={slide} key={slide.id} />)}
    </Carousel>
  )
};

export default MainSlider;