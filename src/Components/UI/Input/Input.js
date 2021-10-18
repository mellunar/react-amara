import React, {useState} from "react";
import './Input.css';

const Input = ({type, name, placeholder, error, altError, className, background, ...restProps}) => {
  const [valid, setValid] = useState(null);

  function onBlur(e){
    e.target.value.length > 0 ? setValid(null) : setValid(error);
    if(altError.includes('CEP')){
      e.target.value.length !== 8 ? setValid(altError) : setValid(null);
    }
  };

  return(
    <div className={`ui-input-container ${className}`}>
      <input className='ui-input-input' onBlur={onBlur} type={type} name={name} id={name} placeholder={placeholder} {...restProps} />
      <label className={`ui-input-label ${background}`} htmlFor={name}>{placeholder}</label>
      {valid && <p className='ui-input-error'>{valid}</p>}
    </div>
  )
};

export default Input;