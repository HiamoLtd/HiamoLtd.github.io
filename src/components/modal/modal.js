import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Import Bootstrap tools
import styles from './modal.module.css';

const Modal = ({ isOpen = false, children }) => {
  const [modalOpen, setModal] = useState(isOpen);

  // If the child container detects a click on a non-important (non-div) object,
  // then close keep it open.
  // If you tag an element with data-modal-retainer, clicking it keeps the modal open.
  // The same applies to elements with no tag that are not divs
  // If you tag an element with "data-modal-retainer={false}", it will close, regardless of type
  const avoidCloseOnChildDiv = (e) => {
    if (e.target.dataset.modalRetainer === 'false') return;
    if (e.target.dataset.modalRetainer || (e.target.tagName && e.target.tagName !== 'DIV')) {
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
        data-modal-retainer={false}
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
