import React from 'react';

const style = {
  font: 'inherit',
  padding: '8px',
  margin: '26px'
}

const UserInput = (props) => {
  return (
    <input style={style} onChange={props.changed} value={props.name} type="text"></input>
  )
}

export default UserInput;
