import React from 'react';
import './Form.css';

const Input = (props) => {
  const {elementType, ...other} = props;
  let inputElement = null;
  const classes = ["Element"];

  if (props.invalid && props.shouldValidate && props.touched) {
    classes.push("Invalid");
  }

  switch (elementType) {
    case ("input"):
      inputElement = <input
        className={classes.join(" ")}
        {...other.elementAttributes}
        value={other.value}
        onChange={other.change}
      />;
      break;
    case ("textarea"):
      inputElement = <textarea
        className={classes.join(" ")}
        {...other.elementAttributes}
        value={other.value}
        onChange={other.change}
      />;
      break;
    case ("select"):
      inputElement = <select
        className={classes.join(" ")}
        value={other.value}
        onChange={other.change}
      >
        {other.elementAttributes.options.map(option => (
          <option
            key={option.value}
            value={option.value}
          >{option.displayValue}</option>
        ))}
      </select>
      break;
    default:
      inputElement = <input
        className={classes.join(" ")}
        {...other.elementAttributes}
        value={other.value}
        onChange={other.change}
      />;
      break;
  }

  return (
    <div className="Input">
      <label className="Label">{props.label}</label>
      {inputElement}
    </div>
  );
}

export default Input;
