import React from 'react';
import Button from '../../components/UI/Button';
import './ContactData.css';
import Spinner from '../../components/UI/Spinner/Spinner';

class ContactData extends React.Component {
  state = {
    name: '',
    email: '',
    address: {
      country: '',
      street: '',
      zipcode: ''
    },
    loading: false,
    price: null
  }

  orderHandler = (e) => {
    e.preventDefault();
    this.setState({
      loading: true
    });

    const URL = global.BASEURL + "orders.json";
    const xhttp = new XMLHttpRequest();
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
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
          err: null
        });
        this.props.history.push("/");
      }
      else if (xhttp.readyState === 4) {
        this.setState({
          loading: false,
          err: "Error " + xhttp.status + ": " + xhttp.response
        });
      }
    }
    xhttp.open("POST", URL, true);
    xhttp.send(JSON.stringify(order));
  }

  render() {
    let form = <Spinner />
    if (!this.state.loading)
      form = (
        <form>
          <input type="text" name="name" placeholder="Your name" />
          <input type="text" name="email" placeholder="example@email.com" />
          <input type="text" name="country" placeholder="Denmark" />
          <input type="text" name="street" placeholder="Streetname 123" />
          <input type="text" name="zipcode" placeholder="Zipcode: XXXX" />
          <Button btnType="Success" clicked={this.orderHandler}>ORDER!</Button>
        </form>
      );
    return (
      <div className="ContactData">
        <h4>Your contact data:</h4>
        {form}
      </div>
    );
  }
}

export default ContactData;
