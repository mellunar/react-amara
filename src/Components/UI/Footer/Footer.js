import React, {useState} from "react";
import './Footer.css';
import Button from "../Button/Button";
import { Link } from "react-router-dom";

const Footer = () => {
  const [userEmail, setUserEmail] = useState('');

  return(
    <footer className='ui-footer'>
      <div className='ui-footer-newsletter'>
        <label htmlFor='newsletter'>Receba ofertas e novidades por e-mail</label>
        <div className='ui-footer-newsletter-form'>
          <input type='email' id='newsletter' name='newsletter' className='ui-footer-input' onChange={(e)=>setUserEmail(e.target.value)} placeholder='Digite seu email' />
          <Button component='button' onClick={()=>console.log(userEmail)}>Cadastrar</Button>
        </div>
      </div>
      <div className='ui-footer-main'>
        <div className='ui-footer-section'>
          <h4>Institucional</h4>
          <ul>
            <li><Link to='/'>Sobre a Amara</Link></li>
            <li><Link to='/'>Termos de Uso</Link></li>
            <li><Link to='/'>Política de Privacidade</Link></li>
            <li><Link to='/'>Estoque</Link></li>
          </ul>
        </div>
        <div className='ui-footer-section'>
          <h4>Informações</h4>
          <ul>
            <li><Link to='/'>Formas de Pagamento</Link></li>
            <li><Link to='/'>Trocas, Devoluções e Reembolso</Link></li>
            <li><Link to='/'>Política de Frete</Link></li>
          </ul>
        </div>
        <div className='ui-footer-section'>
          <h4>Redes Sociais</h4>
          <ul>
            <li><Link to='/'><i className="bi bi-facebook" aria-hidden /> Facebook</Link></li>
            <li><Link to='/'><i className="bi bi-instagram" aria-hidden /> Instagram</Link></li>
            <li><Link to='/'><i className="bi bi-twitter" aria-hidden /> Twitter</Link></li>
          </ul>
        </div>
        <div className='ui-footer-section ui-footer-section-contacts'>
          <img className='footer-logo' alt='logo Amara' src='https://bn02pap001files.storage.live.com/y4mW7JffflW9vxqS0MOrwClETZhfzG9h23ScafruYVOcaQleijrx9nw972NiwbtLzQFUefDVVWTHbtRQbxgACrTpKdbKr_ythZuC-1EIkj5Cr_EID5Z3UPJn3vK_S6SrmA6IoqZ20U9pUIlOy3pTzMPZVuUM-N87wnwnPkKCwnnZVFkT5lPlLEWSVz76XBF0Dso?width=233&height=60&cropmode=none' />
          <address>
            Avenida Presidente Vargas, 500<br />
            Centro - Rio de Janeiro
          </address>
          <div><a href='tel:+559999999999'><i className="bi bi-whatsapp" aria-hidden /> 99 9999-9999</a></div>
          <div><a href='mailto:amara@test.com'><i className="bi bi-envelope" aria-hidden /> amara@test.com</a></div>
        </div>
        <div className='footer-mel'><a href='https://mellunar.github.io'>Melissa Fernandes</a></div>
      </div>
    </footer>
  )
};

export default Footer;