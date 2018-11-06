import React from 'react';
import './Toolbar.css';
import { NavLink } from 'react-router-dom';

const Items = () => (
    <ul className="AllItems">
      <Item link="/Builder" exact>Burger Builder</Item>
      <Item link="/Orders">Orders</Item>
    </ul>
)

export const Item = (props) => (
  <li className="Item">
    <NavLink
      to={props.link}
      exact={props.exact}
    >{props.children}</NavLink>
  </li>
)

export default Items;
