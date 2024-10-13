import React from "react";
import './Modal.css';

const Modal = ({ show, onClose, children }) => {
  if (!show) {
    return null; // Don't render anything if the modal is not shown
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>X</button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
