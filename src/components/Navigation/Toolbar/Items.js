import React from 'react';
import './Toolbar.css';

const Items = () => (
    <ul className="AllItems">
      <Item link="/#">Burger Builder</Item>
      <Item link="/#">Checkout</Item>
    </ul>
)

export const Item = (props) => (
  <li className="Item">
    <a
      href={props.link}
      className={props.active ? "active" : null}
    >{props.children}</a>
  </li>
)

export default Items;
