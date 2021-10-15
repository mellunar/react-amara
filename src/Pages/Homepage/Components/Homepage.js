import React, {useEffect} from "react";
import { useLocation } from 'react-router-dom';
import './Homepage.css';
import MainSlider from "./Main Slider/MainSlider";
import { MainSlides } from "./Main Slider/MainSlides";
import ProductCarousel from "Components/Carousel/ProductCarousel";
import HomeGrid from "./Home Grid/HomeGrid";
import useFirebaseSnapshot from 'Firebase/useFirebaseSnapshot';

const FinalHomepage = () => {
  const [blusas] = useFirebaseSnapshot(8, 'Homepage');
  const [acessorios] = useFirebaseSnapshot(8, 'Acessórios');
  const location = useLocation();

  useEffect(()=>{
    document.title = 'Amara - Página inicial'
  },[location.pathname])

  return(
    <>
      <header className='homepage-header'>
        <MainSlider source={MainSlides} />
      </header>
      <main className='page-main'>
        <ProductCarousel heading='Lançamentos' productArray={blusas} />
        <ProductCarousel heading='Acessórios' productArray={acessorios} />
        <HomeGrid />
      </main>
    </>
  )
}

export default FinalHomepage;