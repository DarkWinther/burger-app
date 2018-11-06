import React from 'react';
import './UI.css';

const Backdrop = (props) => {
  const backdropDiv = (
    <div
      className="Backdrop"
      onClick={props.dismiss}
    >
    </div>
  )
  return props.show && backdropDiv
}

export default Backdrop
