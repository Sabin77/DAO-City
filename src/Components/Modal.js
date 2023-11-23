// src/components/Modal.js
import React from 'react';


const Modal = ({ show, message, onClose }) => {
  return (
    <div className={`modal ${show ? 'active' : ''}`}>
      <div className="modal-content">
        <p>{message}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
