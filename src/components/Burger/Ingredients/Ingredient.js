import React from 'react';
import PropTypes from 'prop-types';
import './Ingredient.css';

const Ingredient = (props) => {
  let ing = null;

  switch (props.type) {
    case 'bread-bottom':
      ing = <div className="BreadBottom"></div>;
      break;
    case 'bread-top':
      ing = (
        <div className="BreadTop">
          <div className="Seeds1"></div>
          <div className="Seeds2"></div>
        </div>
      );
      break;
    // case 'bread-top':
    //   ing = <div className="BreadTop"></div>
    //   break;
    // case 'seeds1':
    //   ing = <div className="Seeds1"></div>;
    //   break;
    // case 'seeds2':
    //   ing = <div className="Seeds2"></div>;
    //   break;
    case 'meat':
      ing = <div className="Meat"></div>;
      break;
    case 'cheese':
      ing = <div className="Cheese"></div>;
      break;
    case 'salad':
      ing = <div className="Salad"></div>;
      break;
    case 'bacon':
      ing = <div className="Bacon"></div>;
      break;
    default:
      ing = null;
      break;
  }

  return ing;
}

Ingredient.propTypes = {
  type: PropTypes.string.isRequired
};

export default Ingredient
