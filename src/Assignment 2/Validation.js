import React from 'react';

const Validation = (props) => {
  if (props.textLength > 5)
    return <h2>Text long enough!</h2>
  else
    return <h2>Text too short!</h2>
}

export default Validation;
