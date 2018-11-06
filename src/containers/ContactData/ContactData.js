import React from 'react';
import Button from '../../components/UI/Button';
import './ContactData.css';
import Spinner from '../../components/UI/Spinner/Spinner';
import Input from '../../components/UI/Form/Input';

class ContactData extends React.Component {
  state = {
    orderForm: {
      name: {
        elementType: "input",
        elementAttributes: {
          type: "text",
          placeholder: "Your name"
        },
        value: "",
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      street: {
        elementType: "input",
        elementAttributes: {
          type: "text",
          placeholder: "Streetname 123"
        },
        value: "",
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      zipcode: {
        elementType: "input",
        elementAttributes: {
          type: "text",
          placeholder: "Zipcode: XXXX"
        },
        value: "",
        validation: {
          required: true,
          minLength: 4,
          maxLength: 4
        },
        valid: false,
        touched: false
      },
      country: {
        elementType: "input",
        elementAttributes: {
          type: "text",
          placeholder: "Denmark"
        },
        value: "",
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      email: {
        elementType: "input",
        elementAttributes: {
          type: "email",
          placeholder: "example@email.com"
        },
        value: "",
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      deliveryMethod: {
        elementType: "select",
        elementAttributes: {
          options: [
            {value: "fastest", displayValue: "Fastest"},
            {value: "cheapest", displayValue: "Cheapest"}
          ]
        },
        value: "fastest",
        validation: {},
        valid: true
      }
    },
    price: null,
    loading: false,
    err: "",
    validForm: false
  }

  orderHandler = (e) => {
    e.preventDefault();
    this.setState({
      loading: true
    });

    const formData = {};
    for (let element in this.state.orderForm) {
      formData[element] = this.state.orderForm[element].value
    }

    const URL = global.BASEURL + "orders.json";
    const xhttp = new XMLHttpRequest();
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      orderData: formData
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

  inputChangeHandler = (inputIdentifier, e) => {
    const updatedOrderForm = {...this.state.orderForm};
    const updatedNestedForm = {...updatedOrderForm[inputIdentifier]};
    updatedNestedForm.value = e.target.value;
    updatedNestedForm.valid = this.checkValidity(updatedNestedForm.value, updatedNestedForm.validation);
    updatedNestedForm.touched = true;
    updatedOrderForm[inputIdentifier] = updatedNestedForm;

    let formValid = true;
    for (let inputIdentifier in updatedOrderForm) {
      formValid = updatedOrderForm[inputIdentifier].valid && formValid
    }

    this.setState({
      orderForm: updatedOrderForm,
      validForm: formValid
    });
  }

  checkValidity(value, rules) {
    let isValid = true;

    if (rules.required) {
      isValid = value.trim() !== "" && isValid;
    }

    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid;
    }

    if (rules.maxLength) {
      isValid = value.length <= rules.maxLength && isValid;
    }

    return isValid;
  }

  render() {
    const formElements = [];
    for (let key in this.state.orderForm) {
      formElements.push({
        id: key,
        attributes: this.state.orderForm[key]
      });
    }

    let form = <Spinner />
    if (!this.state.loading)
      form = (
        <form onSubmit={this.orderHandler}>
          {formElements.map(formElement => (
            <Input
              key={formElement.id}
              elementType={formElement.attributes.elementType}
              elementAttributes={formElement.attributes.elementAttributes}
              value={formElement.attributes.value}
              change={this.inputChangeHandler.bind(this, formElement.id)}
              invalid={!formElement.attributes.valid}
              shouldValidate={formElement.attributes.validation}
              touched={formElement.attributes.touched}
            />
          ))}
          <Button btnType="Success" disabled={!this.state.validForm}>ORDER!</Button>
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