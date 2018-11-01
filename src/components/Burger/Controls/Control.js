import React from 'react';
import './Control.css';

const Control = (props) => {
  return (
    <div className="Control">
      <div className="Label">{props.label}</div>
      <button
        onClick={props.less}
        className="Less"
        disabled={props.disabled}
      >Less</button>
      <button
        onClick={props.more}
        className="More"
      >More</button>
    </div>
  )
}

export default Control;
