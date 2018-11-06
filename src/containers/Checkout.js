import React from 'react';
import Overview from '../components/Checkout/Overview';
import { Route } from 'react-router-dom';
import ContactData from './ContactData/ContactData';

class Checkout extends React.Component {
  state = {
    ingredients: {},
    price: 0
  }

  componentDidMount() {
    const query = new URLSearchParams(this.props.location.search);
    const ingredients = {}
    let price;
    for (let pair of query.entries()) {
      if (pair[0] === "price")
        price = pair[1];
      else
        ingredients[pair[0]] = +pair[1];
    }
    this.setState({
      ingredients: ingredients,
      price: price
    });
  }

  checkoutContinueHandler = () => {
    this.props.history.replace("/Checkout/contact-data");
  }

  checkoutCancelHandler = () => {
    this.props.history.goBack();
  }

  render() {
    return (
      <div>
        <Overview
          ingredients={this.state.ingredients}
          checkoutCancel={this.checkoutCancelHandler}
          checkoutContinue={this.checkoutContinueHandler}
        />
        <Route
          path={this.props.match.path + "/contact-data"}
          render={(props) => <ContactData price={this.state.price} ingredients={this.state.ingredients} {...props}/>}
        />
      </div>
    );
  }
}

export default Checkout;
