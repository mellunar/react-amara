import React, {useState} from "react";
import './LoginForm.css';
import Button from "Components/UI/Button/Button";

const LoginModalInput = ({type,name,placeholder,onChange,...restProps}) => {
  return(
    <div className='login-form-container'>
      <input className='login-form-input' type={type} name={name} id={name} placeholder={placeholder} onChange={onChange} {...restProps} />
      <label className='login-form-label' htmlFor={name}>{placeholder}</label>
    </div>
  )
};

const LoginForm = () => {
  const [values, setValues] = useState('');

  function onChange(e){
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  function formSubmit(e){
    e.preventDefault();
    console.log(values)
  };

  return(
    <form className='login-form' onSubmit={formSubmit}>
      <LoginModalInput type='email' name='login-email' placeholder='Email' onChange={onChange} required />
      <LoginModalInput type='password' name='login-password' placeholder='Senha' onChange={onChange} required />
      <Button component='button' type='submit' className='login-form-button ui-button-light'>Entrar</Button>
    </form>
  )
};

export default LoginForm;