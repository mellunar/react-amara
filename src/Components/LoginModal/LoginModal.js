import React, {useEffect} from "react";
import './LoginModal.css';
import LoginForm from "../LoginForm/LoginForm";
import LoginOptions from "Components/LoginOptions/LoginOptions";

const LoginModal = ({status, closeModal}) => {
  const docBody = document.querySelector('body');
  
  useEffect(()=>{
    if(status){docBody.classList.add('mmopened')}
    // eslint-disable-next-line
  },[status]);

  if(!status){
    docBody.classList.remove('mmopened')
    return null;
  };

  return(
    <div className='login-modal'>
      <div className='login-modal-container'>
        <header className='login-modal-header'>
          <h2 className='login-modal-title'>Login</h2>
          <button className='login-modal-close' onClick={closeModal}><i className="bi bi-x" /></button>
        </header>
        <div className='login-modal-body'>
          <LoginForm />
          <LoginOptions />
        </div>
      </div>
      <div className='close-overlay' onClick={closeModal}></div>
    </div>
  )
};

export default LoginModal;