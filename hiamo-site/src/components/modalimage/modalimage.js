import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Import Bootstrap tools
import { Image } from 'react-bootstrap';
import styles from './modalimage.module.css';

const modalEvent = (e, setModal, desiredVal) => {
  if (e.target.id === "modal-closer") {
    setModal(desiredVal);
  }
}

const ModalImage = ({ image, caption }) => {
  const [modalOpen, setModal] = useState(false);
  return (
    <>
    <Image
      className={styles.image}
      src={image}
      onClick={() => setModal(true)}
    />
    {/* The modal to appear on click */}
    <div
      className={styles.modal}
      style={{display: (modalOpen ? 'block' : 'none')}}
      onClick={(e) => modalEvent(e, setModal, false)}
      id="modal-closer"
    >
      {/* Close modal */}
      <span
        id="modal-closer"
        className={styles.modalCross}
        onClick={(e) => modalEvent(e, setModal, false)}
      >
        &times;
      </span>
      <div
        id="modal-closer"
        className={`content ${styles.modalContent}`}
      >
        {/* Modal image */}
        <Image
          onClick={(e) => modalEvent(e, setModal, true)}
          src={image}
          className={styles.modalImage}
        />
        {/* The image caption */}
        <div
          className={styles.modalCaption}
          onClick={(e) => modalEvent(e, setModal, true)}
        >
          {caption}
        </div>
      </div>
    </div>
    </>
  );
};

export default ModalImage;