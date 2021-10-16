import React, {useEffect} from "react";
import { useLocation } from 'react-router-dom';
import './Homepage.css';
import MainSlider from "./Main Slider/MainSlider";
import { MainSlides } from "./Main Slider/MainSlides";
import ProductCarousel from "Components/Carousel/ProductCarousel";
import HomeGrid from "./Home Grid/HomeGrid";
import useFirebaseSnapshot from 'Firebase/useFirebaseSnapshot';

const FinalHomepage = () => {
  const [lancamentos] = useFirebaseSnapshot(8, 'Homepage');
  const [vestidos] = useFirebaseSnapshot(8, 'Vestidos');
  const [blusas] = useFirebaseSnapshot(8, 'Blusas');
  const location = useLocation();

  useEffect(()=>{
    document.title = 'Amara - Página inicial'
  },[location.pathname]);

  return(
    <>
      <header className='homepage-header'>
        <MainSlider source={MainSlides} />
      </header>
      <main className='page-main'>
        <ProductCarousel heading='Lançamentos' productArray={lancamentos} />
        <ProductCarousel heading='Vestidos' productArray={vestidos} />
        <ProductCarousel heading='Blusas' productArray={blusas} />
        <HomeGrid />
      </main>
    </>
  )
}

export default FinalHomepage;