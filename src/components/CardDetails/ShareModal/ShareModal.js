// ShareModal.js
import React from "react";
import "./ShareModal.css"; // We'll define the styles below

const ShareModal = ({ isOpen, closeModal }) => {
  return (
    <div className={`share-modal ${isOpen ? 'open' : ''}`}>
      <button onClick={closeModal} className="close-btn">X</button>
      <h3 style={{color: "#1e3e52"}}>Add share logic here</h3>
      <div className="share-buttons">
        <button className="share-btn">Facebook</button>
        <button className="share-btn">WhatsApp</button>
        <button className="share-btn">Twitter</button>
        <button className="share-btn">LinkedIn</button>
      </div>
    </div>
  );
};

export default ShareModal;
