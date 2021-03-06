import React, {useContext,useEffect,useState,useRef} from "react";
import { Link } from "react-router-dom";
import './Topnav.css';
import { NavItems } from "./Navmenu";
import logoAmara from 'Resources/amara-logo.png';
import { LoginContext, CartContext } from "Contexts/Contexts";
import TopCart from "Components/TopCart/TopCart";

const Topnav = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  const [activeSub, setActiveSub] = useState(null);
  const [prevScrollpos, setPrevScrollpos] = useState('')
  const [pageScroll, setPageScroll] = useState('up');
  const searchInput = useRef(null);
  const htmlBody = document.querySelector('body');
  const {setModalStatus} = useContext(LoginContext);
  const {shoppingCart} = useContext(CartContext);

  useEffect(()=>{
    openMenu === true ? htmlBody.classList.add('mmopened') : htmlBody.classList.remove('mmopened');

    document.addEventListener("mousedown", windowOnMouseDown);
    window.addEventListener("resize", windowOnResize);
    return () => {//= onunmount
      document.removeEventListener("mousedown", windowOnMouseDown);
      window.removeEventListener("resize", windowOnResize);
    }
    // eslint-disable-next-line
  },[openMenu, openSearch]);

  useEffect(()=>{
    setPrevScrollpos(window.pageYOffset);    
    window.addEventListener("scroll", windowOnScroll);
    return () => {
      window.removeEventListener("scroll", windowOnScroll);
    }
    // eslint-disable-next-line
  },[prevScrollpos])

  useEffect(()=>{
    setPageScroll("up");
    // eslint-disable-next-line
  },[shoppingCart.length + 1]);

  function windowOnResize(){
    if(window.innerWidth > 1023){
      if(openMenu === true){setOpenMenu(false)}
    }
  };

  function windowOnMouseDown(event){
    if(openSearch === true && event.target !== searchInput.current){setOpenSearch(false)}
  };

  function windowOnScroll(){
    var currentScrollPos = window.pageYOffset;
    if (currentScrollPos <= 60 || prevScrollpos > currentScrollPos) {
      setPageScroll("up");
    }
    else {
      setPageScroll("down");
    }
    setPrevScrollpos(currentScrollPos);
  };

  function openLoginModal(){
    setOpenMenu(false);
    setModalStatus(true);
  };

  return(
    <nav className='topnav' data-scroll={pageScroll}>
      <nav className='topnav-topsection'>
        <button className='mobonly topnav-mobmenu-button' onClick={()=>{openMenu === false ? setOpenMenu(true) : setOpenMenu(false)}} aria-label='Menu' aria-expanded={openMenu === false ? 'false' : 'open'}>
          {openMenu === false ? <i className="bi bi-list" /> : <i className="bi bi-x" />}
        </button>
        <Link to='/' className='topnav-logolink'>
          <img className='topnav-logo' alt='logo Amara' src={logoAmara} />
        </Link>
        <div className='topnav-mobmenu-navlist' data-mobmenu={openMenu === false ? 'closed' : 'opened'}>
          <div className='mobonly topnav-mobmenu-search'>
            <label htmlFor='mobsearch'><i className="bi bi-search" aria-label='Pesquisar' /></label>
            <input type='text' id='mobsearch' name='mobsearch' className='topnav-search-input' placeholder='Pesquisar' />
          </div>
          <ul className='topnav-navlist'>
            {NavItems.map(el => (
              <li key={el.id} onMouseLeave={() => {if(window.innerWidth > 1024){setActiveSub(null)}}}>
                <Link to={el.url} onMouseEnter={() => {if(window.innerWidth > 1024){setActiveSub(el.id)}}}>{el.label}{el.subitems && <button className='mobonly' onClick={(e)=>{e.preventDefault(); setActiveSub(el.id)}} aria-hidden><i className="bi bi-chevron-right" /></button>}</Link>
                {el.subitems && <ul className='topnav-sublist' data-active-sub={activeSub === el.id ? 'opened' : 'closed'}>
                  <li className='mobonly'><div className='topnav-moblist-back' onClick={(e)=>{e.preventDefault(); setActiveSub(null)}}><button aria-hidden><i className="bi bi-chevron-left" /></button> Voltar</div></li>
                    {el.subitems.map(itm => (
                      <li key={itm.id}><Link to={itm.url}>{itm.label}</Link></li>
                    ))}
                  </ul>}
              </li>
            ))}
          </ul>
          <ul className='mobonly topnav-mobonly-menu' data-opacity={!activeSub ? 'show' : 'hide'}>
            <li><button onClick={()=>openLoginModal()}><i className="bi bi-person-circle" aria-hidden /> Fazer login</button></li>
            <li><Link to='/'>Criar conta</Link></li>
            <li><Link to='/'>Contato</Link></li>
            <li><Link to='/'>Sobre</Link></li>
          </ul>
        </div>
        <ul className='topnav-userlist'>
          <li className='pconly'><button className='topnav-search-icon' onClick={()=>{setOpenSearch(true); searchInput.current.focus()}}><i className="bi bi-search" aria-label='Pesquisar' /></button></li>
          <li className='pconly'><button onClick={()=>openLoginModal()}><i className="bi bi-person-circle" aria-label='Usu??rio' /></button></li>
          <li>
            <Link to='/cart' className='topnav-cart-button'>
              <i className="bi bi-cart3 topnav-cart-icon" aria-label='Carrinho' />
              <span className='topnav-cart-size' aria-label={`${shoppingCart.length} itens`}>{shoppingCart.length < 10 ? shoppingCart.length : '9+'}</span>
            </Link>
          </li>
        </ul>
        <div className='pconly topnav-desktop-search' data-pcsearch={openSearch === false ? 'closed' : 'opened'} onClick={(e)=>{if(e.target !== searchInput.current){setOpenSearch(false)}}}>
          <div className='topnav-desktop-searchbox'>
            <label aria-hidden><i className="bi bi-search" /></label>
            <input type='text' id='pcsearch' name='pcsearch' className='topnav-search-input' placeholder='Pesquisar' ref={searchInput} />
            <button onClick={()=>{setOpenSearch(false)}}><i className="bi bi-x" /></button>
          </div>
        </div>
      </nav>
      <TopCart scroll={pageScroll} />
      <div className='topnav-menu-opened' onClick={()=>{setOpenMenu(false)}} hidden={openMenu === false ? true : false} aria-hidden />
    </nav>
  )
};

export default Topnav;