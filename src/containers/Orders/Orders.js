import React from 'react';
import './Orders.css';
import ErrorHandler from '../../hoc/ErrorHandler';

const Order = (props) => {
  const ingredients = []

  for (let ingredient in props.ingredients) {
    ingredients.push({
      name: ingredient,
      amount: props.ingredients[ingredient]
    });
  }

  const ingredientOutput = ingredients.map(ing => {
    return (
      <span
        key={ing.name}
        style={{
          textTransform: "capitalize",
          display: "inline-block",
          margin: "0 8px",
          border: "1px solid #CCC",
          padding: "5px"
        }}
      >{ing.name + " (" + ing.amount + ")"}
      </span>
    )
  });

  return (
    <div className="Order">
      <p>Ingredients: {ingredientOutput}</p>
      <p>Price: <strong>{props.price.toFixed(2)} kr,-</strong></p>
    </div>
  )
}

class Orders extends React.Component {
  state = {
      orders: [],
      loading: true,
      err: ""
  }

  componentDidMount() {
    const xhttp = new XMLHttpRequest();
    const URL = global.BASEURL + "orders.json";

    xhttp.onreadystatechange = () => {
      if (xhttp.readyState === 4 && xhttp.status === 200) {
        const resData = JSON.parse(xhttp.response);
        const fetchedOrders = [];
        for (let key in resData) {
          fetchedOrders.push({
            id: key,
            ...resData[key]
          });
        }
        this.setState({
          loading: false,
          orders: fetchedOrders,
          err: ""
        });
      }
      else if (xhttp.readyState === 4) {
        this.setState({
          loading: false,
          err: "Error fetching orders from server"
        });
      }
    }

    xhttp.open("GET", URL, true);
    xhttp.send();
  }

  closeErrorHandler = () => {
    this.setState({
      err: ""
    });
  }

  render() {
    return(
      <div>
        <ErrorHandler
          error={this.state.err}
          clear={this.closeErrorHandler}
        />
        {this.state.orders.map(order => (
          <Order
            key={order.id}
            ingredients={order.ingredients}
            price={+order.price}
          />
        ))}
      </div>
    );
  }
}

export default Orders;
