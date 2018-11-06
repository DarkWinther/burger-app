import React from 'react';
import "./Burger.css";
import Ingredient from './Ingredients/Ingredient';

const Burger = (props) => {
  let ingArr = Object.keys(props.ingredients).map(ingKey => {
    return [...Array(props.ingredients[ingKey])].map((_, i) => {
      return <Ingredient key={ingKey + i} type={ingKey} />;
    });
  }).reduce((arr, element) => {
    return arr.concat(element)
  }, []);
  if (ingArr.length === 0) {
    ingArr = <p>Add an ingredient to begin</p>
  }

  return (
    <div className="Burger">
      <Ingredient type="bread-top" />
      {ingArr}
      <Ingredient type="bread-bottom" />
    </div>
  );
}

export default Burger;
