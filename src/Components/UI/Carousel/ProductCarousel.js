import React from "react";
import './Carousel.css';
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";

const ProductCarousel = ({heading}) => {
  const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2
  });

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

  let items = [];
  for(let i=0;i<2;i++){
    items.push({
      title: 'Blusa cropped manga curta com estampa de mão caveira',
      price: 59.9,
      discount: 10,
      portion: 3,
      img: 'https://bn02pap001files.storage.live.com/y4mfAwoB0Q-6YCbu_uXDb6-Muw0LFUU1T6iYP3Ai16keYA3EKxvqHxg0ZjdppeAdOgoqogXp2BivF96D_DcBTk4i2RqTN19esl0dHbhh6F0e9w7fAOhg5E-SuLM3v_YWvx59UyF-FG0hFjr5zXybZV2ZPl9lcaQ20r5uFG67aTpOg3pHVL35-Iki54ZLLboyzmq?width=1000&height=1200&cropmode=none',
      url: '/'
    })
  }

  return(
    <section className='product-carousel'>
      {heading && <h2 className='product-carousel-heading'>{heading}</h2>}
      <Carousel responsive={responsive}>
        {items.map((slide,i)=>(
          <article className='product-carousel-slide' key={i}>
            <img alt={slide.title} src={slide.img} />
            <div className='product-slide-info'>
              <h3 className='product-carousel-title'>{slide.title}</h3>
              {slide.discount > 0 && <div className='product-slide-discount' aria-label={`com ${slide.discount}% de desconto`}>-{slide.discount}%</div>}
              <div className='product-carousel-price'><b>{formatter.format(slide.price)}</b><br />em até {slide.portion}x de {formatter.format(slide.price/slide.portion)} sem juros</div>
            </div>
            <div className='product-carousel-fav'></div>
            <Link to={slide.url} className='linkfill' onDragStart={(e)=>e.preventDefault()} />
          </article>
        ))}
      </Carousel>
    </section>
  )
};

export default ProductCarousel;