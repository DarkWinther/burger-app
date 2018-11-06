import React from 'react';
import Burger from '../Burger/Burger';
import Button from '../UI/Button';
import './Checkout.css';

const Overview = (props) => {
  return (
    <div className="Overview">
      <h3>Here's your burger. Please enjoy!</h3>
      <div style={{width: '100%', margin: 'auto'}}>
        <Burger ingredients={props.ingredients}/>
      </div>
      <Button
        btnType="Danger"
        clicked={props.checkoutCancel}
      >Cancel</Button>
      <Button
        btnType="Success"
        clicked={props.checkoutContinue}
      >Continue</Button>
    </div>
  );
}

export default Overview;
