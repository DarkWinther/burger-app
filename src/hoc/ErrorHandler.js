import React from 'react';
import Modal from '../components/UI/Modal';

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
