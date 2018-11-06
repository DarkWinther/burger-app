import React from 'react';
import Button from '../../UI/Button';

const Summary = (props) => {
  const sum = Object.keys(props.ingredients).map((ingKey, i) => {
    return (
      <li key={"sum_" + ingKey + i}>
        <span
          style={{textTransform: "capitalize"}}
        >
          {ingKey}
        </span>: {props.ingredients[ingKey]}
      </li>
    );
  });

  return (
    <>
      <h3>Your order</h3>
      <p>A delightful burger with the following items:</p>
      <ul>
        {sum}
      </ul>
      <p><strong>Total price: {props.price.toFixed(2)}kr.-</strong></p>
      <p>Continue to checkout?</p>
      <Button btnType="Danger" clicked={props.cancel}>Cancel</Button>
      <Button btnType="Success" clicked={props.continue}>Continue</Button>
    </>
  )
}

export default Summary
