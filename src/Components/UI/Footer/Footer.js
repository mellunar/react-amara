import React, {useState} from "react";
import './Footer.css';
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import logoAmara from 'Resources/amara-logo.png';

const Footer = () => {
  const [userEmail, setUserEmail] = useState('');
  const [valid, setValid] = useState(null);

  function onBlur(e){
    // eslint-disable-next-line
    const validEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    validEmail.test(e.target.value) === true ? setValid(true) : setValid('Insira um email válido');
  };

  return(
    <footer className='ui-footer'>
      <div className='ui-footer-newsletter'>
        <label htmlFor='newsletter'>Receba ofertas e novidades por e-mail</label>
        <div className='ui-footer-newsletter-form'>
          <input type='email' id='newsletter' name='newsletter' className='ui-footer-input' onChange={(e)=>setUserEmail(e.target.value)} onBlur={onBlur} placeholder='Digite seu email' required />
          <Button component='button' onClick={()=>console.log(userEmail)} disabled={valid === true ? false : true}>Cadastrar</Button>
        </div>
        {valid && <p className='ui-footer-newsletter-error'>{valid}</p>}
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
          <img className='footer-logo' alt='logo Amara' src={logoAmara} />
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