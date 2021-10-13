import React, {useState} from "react";
import './LoginForm.css';
import Button from "Components/UI/Button/Button";

const LoginModalInput = ({type,name,placeholder,...restProps}) => {
  const [valid, setValid] = useState(null);

  function onBlur(e){
    // eslint-disable-next-line
    const validEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    if(e.target.name === 'loginEmail' && validEmail.test(e.target.value) === false && e.target.value.length > 0){
      return setValid('Insira um email válido')
    };
    e.target.value.length > 0 ? setValid(null) : setValid('Campo requerido');
  };

  return(
    <div className='login-form-container'>
      <input className='login-form-input' onBlur={onBlur} type={type} name={name} id={name} placeholder={placeholder} {...restProps} />
      <label className='login-form-label' htmlFor={name}>{placeholder}</label>
      {valid && <p className='login-form-error'>{valid}</p>}
    </div>
  )
};

const LoginForm = () => {
  const [values, setValues] = useState({loginEmail: '', loginPassword: ''});

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
      <LoginModalInput type='email' name='loginEmail' placeholder='Email' onChange={onChange} required />
      <LoginModalInput type='password' name='loginPassword' placeholder='Senha' onChange={onChange} required />
      <Button component='button' type='submit' className='login-form-button ui-button-light'>Entrar</Button>
    </form>
  )
};

export default LoginForm;