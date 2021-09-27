import React, {useEffect,useState,useRef} from "react";
import { Link } from "react-router-dom";
import './Topnav.css';

const Topnav = () => {
  const [openSearch, setOpenSearch] = useState(false);
  const pesquisar = useRef(null);
  const pbtn = React.createRef(null);

  useEffect(()=>{
    //document.activeElement !== pbtn.current ? setOpenSearch(false) : null
  },[])

  return(
    <header className='topnav-header'>
      <section className='topnav-topsection'>
        <div className='topnav-search'>
          <div className='topnav-search-bar' data-search-expanded={openSearch === false ? 'closed' : 'opened'}>
            <input id='pesquisar' ref={pesquisar} placeholder='Pesquisar' data-search-input={openSearch === false ? 'closed' : 'opened'} onBlur={()=>{document.activeElement === pbtn.current ? setOpenSearch(true) : setOpenSearch(false)}} />
            <button className='topnav-search-button' ref={pbtn} onClick={() => {if(openSearch === false){setOpenSearch(true);pesquisar.current.focus()}}}><i className="bi bi-search"></i></button>
          </div>
          <label htmlFor='pesquisar' onClick={() => {if(openSearch === false){setOpenSearch(true)}}}>Pesquisar</label>
        </div>
        <Link to='/'>
          <img className='topnav-logo' alt='logo' src='https://bn02pap001files.storage.live.com/y4mW7JffflW9vxqS0MOrwClETZhfzG9h23ScafruYVOcaQleijrx9nw972NiwbtLzQFUefDVVWTHbtRQbxgACrTpKdbKr_ythZuC-1EIkj5Cr_EID5Z3UPJn3vK_S6SrmA6IoqZ20U9pUIlOy3pTzMPZVuUM-N87wnwnPkKCwnnZVFkT5lPlLEWSVz76XBF0Dso?width=233&height=60&cropmode=none' />
        </Link>
      </section>
    </header>
  )
};

export default Topnav;