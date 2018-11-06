import React from 'react';
import './UI.css';

const Button = (props) => {
  return (
    <button
      onClick={props.clicked}
      className={["Button", props.btnType].join(' ')}
    >
      {props.children}
    </button>
  )
}

export default Button;
