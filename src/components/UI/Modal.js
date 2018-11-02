import React from 'react';
import './UI.css';
import Backdrop from './Backdrop';

class Modal extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return (nextProps.show !== this.props.show || nextProps.children !== this.props.children)
  }

  render() {
    return (
      <>
        <Backdrop dismiss={this.props.close} show={this.props.show} />
        <div
          className="Modal"
          style={{
            transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: this.props.show ? '1' : '0'
          }}
        >
          {this.props.children}
        </div>
      </>
    );
  }
}

export default Modal;
