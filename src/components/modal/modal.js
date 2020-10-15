import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Import Bootstrap tools
import styles from './modal.module.css';

const Modal = ({ isOpen = false, children }) => {
  const [modalOpen, setModal] = useState(isOpen);

  // If the child container detects a click on a non-important (non-div) object,
  // then close keep it open.
  const avoidCloseOnChildDiv = (e) => {
    if (e.target.tagName !== 'DIV') {
      setModal(true);
      e.stopPropagation();
    }
  };

  return (
    <btn
      className={styles.modal}
      style={{ display: modalOpen ? 'block' : 'none' }}
      id="modal-closer"
      role="dialog"
      onClick={() => setModal(false)}
      onKeyPress={() => setModal(false)}
    >
      {/* Close modal */}
      <span
        id="modal-closer"
        className={styles.modalCross}
        onClick={() => setModal(false)}
        onKeyPress={() => setModal(false)}
        role="button"
        tabIndex={0}
      >
        &times;
      </span>
      <btn
        id="modal-retainer"
        className={`content ${styles.modalContent}`}
        onClick={avoidCloseOnChildDiv}
        onKeyPress={avoidCloseOnChildDiv}
        role="dialog"
      >
        {children}
      </btn>
    </btn>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default Modal;
