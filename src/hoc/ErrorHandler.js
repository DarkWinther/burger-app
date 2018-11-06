import React from 'react';
import Modal from '../components/UI/Modal';

// I couldn't actually make this work as a higher-order component,
// so it's just a normal component.

const ErrorHandler = (props) => (
  <Modal
    show={props.error}
    close={props.clear}
  >
    <h2>Something went wrong!</h2>
    <p>{props.error}</p>
  </Modal>
)

export default ErrorHandler;
