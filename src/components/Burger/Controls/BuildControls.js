import React from 'react';
import PropTypes from 'prop-types';
import './BuildControls.css';
import Control from './Control';

const controls = [
  { label: 'Meat', type: 'meat' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
]

const BuildControls = (props) => {
  return (
    <div className="BuildControls">
      <p style={{color: "#FFFFFF"}}>
        Current Price:{' '}
        <strong>
          {props.price.toFixed(2)}kr.-
        </strong>
      </p>
      {controls.map(ctrl => {
        return (
          <Control
            key={ctrl.label}
            label={ctrl.label}
            less={() => props.less(ctrl.type)}
            more={() => props.more(ctrl.type)}
            disabled={props.disabled[ctrl.type]}
          />
        )
      })}
      <button
        className="OrderButton"
        disabled={!props.purchasable}
        onClick={props.order}
      >
        Order this burger!</button>
    </div>
  )
}

BuildControls.propTypes = {
  price: PropTypes.number.isRequired
};

export default BuildControls;
