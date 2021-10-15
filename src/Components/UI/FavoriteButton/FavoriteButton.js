import React, {useContext,useState} from "react";
import './FavoriteButton.css';

const FavoriteButton = ({context, className}) => {
  const [fav, setFav] = useState('');
  const {setModalStatus} = useContext(context);

  function favItem(){
    setModalStatus(true)
  };

  return(
    <button className={`ui-favorite-button ${className}`} title='adicionar aos favoritos'>
      <i className={`bi bi-heart${fav}`} aria-label='adicionar aos favoritos' onMouseEnter={()=>setFav('-fill')} onMouseLeave={()=>setFav('')} onClick={()=>favItem()} />
    </button>
  )
};

export default FavoriteButton;