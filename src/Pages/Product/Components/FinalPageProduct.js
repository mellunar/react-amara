import React, {useEffect,useState} from "react";
import { useLocation } from 'react-router-dom';
//import { useHistory } from "react-router-dom";
import './FinalPageProduct.css';
import { db } from "Firebase/Firebase";
import ProductCarousel from "Components/Carousel/ProductCarousel";
import ProductWrapper from "./ProductWrapper/ProductWrapper";
import useFirebaseSnapshot from 'Firebase/useFirebaseSnapshot';

const FinalPageProduct = ({prodId}) => {
  const [product, setProduct] = useState(null);
  const [category, setCategory] = useState(null);
  const [categoria] = useFirebaseSnapshot(8, category);
  const location = useLocation();
  //const history = useHistory();

  useEffect(()=>{
    fetchData();
    document.title = `Amara`;
    if(product === undefined){
      //history.push('/404')
    }
    // eslint-disable-next-line
  },[location.pathname]);

  useEffect(()=>{
    if(product && product !== undefined){
      document.title = `${product.title} - Amara`;
      setCategory(product.category);
    }
  },[product])

  async function fetchData(){
    await db.collection('amara')
    .doc(prodId)
    .get()
    .then((doc) => {
      setProduct(doc.data());
    })
    .catch((error) => {
      console.log(error)
    });
  };

  return(
    <main className='product-main'>
      {product && product !== undefined && <ProductWrapper product={product} prodId={prodId} />}
      {category && category !== undefined ? <ProductCarousel className='product-page-carousel' heading='Mais desta categoria' productArray={categoria} /> : 
      <ProductCarousel className='product-page-carousel' heading='Mais desta categoria' productArray={[]} />}
    </main>
  )
};

export default FinalPageProduct;