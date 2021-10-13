import React from "react";
import './Homepage.css';
import MainSlider from "./Main Slider/MainSlider";
import { MainSlides } from "./Main Slider/MainSlides";
import ProductCarousel from "Components/Carousel/ProductCarousel";
import HomeGrid from "./Home Grid/HomeGrid";

const FinalHomepage = () => {
  let items = [];
  for(let i=1;i<9;i++){
    items.push({
      title: 'Blusa cropped manga curta com estampa de mão caveira',
      price: 59.9,
      discount: 0,
      portion: 3,
      img: 'https://bn02pap001files.storage.live.com/y4mfAwoB0Q-6YCbu_uXDb6-Muw0LFUU1T6iYP3Ai16keYA3EKxvqHxg0ZjdppeAdOgoqogXp2BivF96D_DcBTk4i2RqTN19esl0dHbhh6F0e9w7fAOhg5E-SuLM3v_YWvx59UyF-FG0hFjr5zXybZV2ZPl9lcaQ20r5uFG67aTpOg3pHVL35-Iki54ZLLboyzmq?width=1000&height=1200&cropmode=none',
      url: '/'
    })
  }

  return(
    <>
      <header className='homepage-header'>
        <MainSlider source={MainSlides} />
      </header>
      <main className='page-main'>
        <ProductCarousel heading='Lançamentos' productArray={items} />
        <ProductCarousel heading='Acessórios' productArray={items} />
        <HomeGrid />
      </main>
    </>
  )
}

export default FinalHomepage;