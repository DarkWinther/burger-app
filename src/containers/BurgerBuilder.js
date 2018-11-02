import React from 'react';
import Burger from '../components/Burger/Burger';
import BuildControls from '../components/Burger/Controls/BuildControls';
import Modal from '../components/UI/Modal';
import Summary from '../components/Burger/Controls/Summary';
import Spinner from '../components/UI/Spinner/Spinner';
import ErrorHandler from '../hoc/ErrorHandler';

const PRICES = {
  meat: 9.95,
  cheese: 5.95,
  salad: 4.5,
  bacon: 8.75,
}

class BurgerBuilder extends React.Component {
  state = {
    ingredients: null,
    price: 15.00,
    purchasable: false,
    ordered: false,
    loading: false,
    err: null
  }

  componentDidMount() {
    const xhttp = new XMLHttpRequest();
    const URL = "https://burger-server-3e616.firebaseio.com/ingredients.json"
    xhttp.onreadystatechange  = () => {
      if (xhttp.readyState === 4 && xhttp.status === 200) {
        this.setState({
          ingredients: JSON.parse(xhttp.response),
          err: null
        });
      }
      else if (xhttp.readyState === 4) {
        this.setState({
          err: "Error " + xhttp.status + ": " + xhttp.response
        });
      }
    }
    xhttp.open("GET", URL, true);
    xhttp.send();
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
    // alert("You continue to checkout! (Not implemented)");
    this.setState({
      loading: true
    });

    const URL = "https://burger-server-3e616.firebaseio.com/orders.json";
    const xhttp = new XMLHttpRequest();
    const order = {
      ingredients: this.state.ingredients,
      price: this.state.price,
      customer: {
        name: 'N Armstrong',
        address: {
          street: 'StreetStreet 1',
          zipcode: '1234',
          county: 'Lalaland'
        },
        email: 'Testmail@test.com'
      },
      deliveryMethod: 'fastest'
    }

    xhttp.onreadystatechange  = () => {
      if (xhttp.readyState === 4 && xhttp.status === 200) {
        this.setState({
          loading: false,
          ordered: false,
          err: null
        });
      }
      else {
        this.setState({
          loading: false,
          ordered: false,
          err: "Error " + xhttp.status + ": " + xhttp.response
        });
      }
    }
    xhttp.open("POST", URL, true);
    xhttp.send(JSON.stringify(order));
  }

  clearErrorHandler = () => {
    this.setState({
      err: null
    });
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

    let modalInternal = <Spinner />;
    if (!this.state.loading && this.state.ingredients) {
      modalInternal = <Summary
        ingredients={this.state.ingredients}
        cancel={this.purchaseCancelHandler}
        continue={this.purchaseContinueHandler}
        price={this.state.price}
      />
    }

    let burger = <Spinner />;
    if (this.state.ingredients) {
      burger =
      <>
        <Burger ingredients={this.state.ingredients}/>
          <BuildControls
            more={this.addIngredientHandler}
            less={this.removeIngredientHandler}
            price={this.state.price}
            disabled={buttonInfo}
            purchasable={this.state.purchasable}
            order={this.purchaseHandler}
        />
      </>;
    }

    return (
      <>
        <ErrorHandler error={this.state.err} clear={this.clearErrorHandler} />
        <Modal close={this.purchaseCancelHandler} show={this.state.ordered}>
          {modalInternal}
        </Modal>
        {burger}
      </>
    )
  }
}

export default BurgerBuilder
