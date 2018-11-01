import React from 'react';
import Burger from '../components/Burger/Burger';
import BuildControls from '../components/Burger/Controls/BuildControls';
import Modal from '../components/UI/Modal';
import Summary from '../components/Burger/Controls/Summary';

const PRICES = {
  meat: 9.95,
  cheese: 5.95,
  salad: 4.5,
  bacon: 8.75,
}

class BurgerBuilder extends React.Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    price: 15.00,
    purchasable: false,
    ordered: false
  }

  canPurchase(ingredients) {
    const sum = Object.keys(ingredients).map((ingKey) => {
      return ingredients[ingKey];
    }).reduce((sum, element) => {
      return sum + element;
    }, 0);
    this.setState({
      purchasable: sum > 0
    });
  }

  purchaseHandler = () => {
    this.setState({
      ordered: true
    });
  }

  purchaseCancelHandler = () => {
    this.setState({
      ordered: false
    })
  }

  purchaseContinueHandler = () => {
    alert("You continue to checkout! (Not implemented)");
  }

  addIngredientHandler = (type) => {
    const count = this.state.ingredients[type];
    const updatedIngredients = {...this.state.ingredients};
    updatedIngredients[type] = count + 1;
    const newPrice = this.state.price + PRICES[type];

    this.setState({
      price: newPrice,
      ingredients: updatedIngredients
    });
    this.canPurchase(updatedIngredients);
  }

  removeIngredientHandler = (type) => {
    const count = this.state.ingredients[type];
    if (count < 1)
      return;
    const updatedIngredients = {...this.state.ingredients};
    updatedIngredients[type] = count - 1;
    const newPrice = this.state.price - PRICES[type];
    this.setState({
      price: newPrice,
      ingredients: updatedIngredients
    })
    this.canPurchase(updatedIngredients);
  }

  render() {
    const buttonInfo = {...this.state.ingredients};
    for (let key in buttonInfo) {
      buttonInfo[key] = buttonInfo[key] < 1;
    }

    return (
      <>
        <Modal close={this.purchaseCancelHandler} show={this.state.ordered}>
          <Summary
            ingredients={this.state.ingredients}
            cancel={this.purchaseCancelHandler}
            continue={this.purchaseContinueHandler}
            price={this.state.price}
          />
        </Modal>
        <Burger ingredients={this.state.ingredients}/>
          <BuildControls
            more={this.addIngredientHandler}
            less={this.removeIngredientHandler}
            price={this.state.price}
            disabled={buttonInfo}
            purchasable={this.state.purchasable}
            order={this.purchaseHandler}
          />
      </>
    )
  }
}

export default BurgerBuilder;
