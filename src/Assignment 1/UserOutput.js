import React from 'react';
import './UserOutput.css';

const UserOutput = (props) => {
  return (
    <div className="userOutput">
      <p>Username: {props.username}</p>
      <p>This is the second paragraph</p>
    </div>
  )
}

export default UserOutput;
