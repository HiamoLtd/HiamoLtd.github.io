/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Import Bootstrap tools
import { Image } from 'react-bootstrap';
import styles from './modalimage.module.css';

const modalEvent = (e, setModal, desiredVal) => {
  if (e.target.id === 'modal-closer') {
    setModal(desiredVal);
  }
};

const ModalImage = ({ image, imageClass, caption }) => {
  const [modalOpen, setModal] = useState(false);

  return (
    <>
      <Image
        className={`${styles.image} ${imageClass || ''}`}
        src={image}
        onClick={() => setModal(true)}
        onKeyPress={() => setModal(true)}
        role="button"
        tabIndex={0}
      />
      {/* The modal to appear on click */}
      <div
        className={styles.modal}
        style={{ display: modalOpen ? 'block' : 'none' }}
        onClick={e => modalEvent(e, setModal, false)}
        onKeyPress={e => modalEvent(e, setModal, false)}
        id="modal-closer"
        role="dialog"
      >
        {/* Close modal */}
        <span
          id="modal-closer"
          className={styles.modalCross}
          onClick={e => modalEvent(e, setModal, false)}
          onKeyPress={e => modalEvent(e, setModal, false)}
          role="button"
          tabIndex={0}
        >
          &times;
        </span>
        <div id="modal-closer" className={`content ${styles.modalContent}`}>
          {/* Modal image */}
          <Image
            onClick={e => modalEvent(e, setModal, true)}
            src={image}
            className={styles.modalImage}
          />
          {/* The image caption */}
          <div
            className={styles.modalCaption}
            onClick={e => modalEvent(e, setModal, true)}
            onKeyPress={e => modalEvent(e, setModal, false)}
            role="button"
            tabIndex={0}
          >
            {caption}
          </div>
        </div>
      </div>
    </>
  );
};

ModalImage.propTypes = {
  image: PropTypes.string.isRequired,
  caption: PropTypes.node,
  imageClass: PropTypes.string,
};

export default ModalImage;
