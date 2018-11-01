import React from 'react';
import './Toolbar.css';
import Logo from '../../Layout/Logo';
import Items from './Items';
import MenuButton from './MenuButton/MenuButton';

const Toolbar = (props) => {
  return (
    <header className="Toolbar">
      <MenuButton click={props.menuClick} />
      <Logo />
      <nav>
        <Items />
      </nav>
    </header>
  )
}

export default Toolbar;
