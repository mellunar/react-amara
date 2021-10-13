import React from "react";
import './LoginOptions.css';
import Button from "Components/UI/Button/Button";

const LoginSocialButton = ({icon, ...restProps}) => {
  return(
    <button className='login-options-social-button' {...restProps}><i className={`bi bi-${icon}`} /></button>
  )
}

const LoginOptions = () => {
  return(
    <div className='login-options'>
      <div className='login-options-create'>
        <span className='login-options-create-text'>Ainda não possui uma conta?</span>
        <div className='login-options-create-bar' aria-hidden></div>
        <Button className='ui-button-light login-options-create-button'>Criar conta</Button>
      </div>
      <div className='login-options-social'>
        <span className='login-options-social-text'>Entrar com rede social</span>
        <div className='login-options-social-bar' aria-hidden></div>
        <div className='login-options-social-buttons'>
          <LoginSocialButton icon='facebook' title='Facebook' />
          <LoginSocialButton icon='google' title='Google' />
        </div>
      </div>
    </div>
  )
};

export default LoginOptions