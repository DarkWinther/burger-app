import React from 'react';
import LogoPNG from '../../assets/images/burger-logo.png';
import './Layout.css';

const Logo = (props) => {
  return (
    <div className="Logo">
      <img src={LogoPNG} alt="Buger App Logo" />
    </div>
  )
}

export default Logo;
