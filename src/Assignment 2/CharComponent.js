import React from 'react';

const style = {
  display: "inline-block",
  padding: "16px",
  textAlign: "center",
  margin: "16px",
  border: "1px solid black",
  backgroundColor: "cyan"
}

const CharComponent = (props) => {
  return <p onClick={props.click} style={style}>{props.text}</p>
}

export default CharComponent;
