import React from 'react';
import Logo from '../../Layout/Logo';
import Items from '../Toolbar/Items';
import './SideDrawer.css';
import Backdrop from '../../UI/Backdrop';

const SideDrawer = (props) => {
  return (
    <>
      <Backdrop show={props.open} dismiss={props.close} />
      <div className={"SideDrawer " + (props.open ? "Open" : "Close")}>
        <Logo />
        <nav>
          <Items />
        </nav>
      </div>
    </>
  );
}

export default SideDrawer
