import React from "react";
import './Button.css'

const Button = ({children, className, component: Component, theme, ...restProps}) => {
  return(
    <Component className={`ui-button ${className}`} {...restProps}>{children}</Component>
  )
};

Button.defaultProps = {
  component: 'a',
  className: '',
}

export default Button;