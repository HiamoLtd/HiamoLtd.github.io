/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Import Bootstrap tools
import Img from 'gatsby-image';
import { Image } from 'react-bootstrap';
import styles from './modalimage.module.css';

const modalEvent = (e, setModal, desiredVal) => {
  if (e.target.id === 'modal-closer') {
    setModal(desiredVal);
  }
};

const ModalImage = ({
  image, imageFluid, height, imageClass, caption
}) => {
  const [modalOpen, setModal] = useState(false);

  return (
    <>
      <div
        className={`${styles.imageWrapper} ${imageClass || ''}`}
        onClick={() => setModal(true)}
        onKeyPress={() => setModal(true)}
        tabIndex={0}
        role="button"
      >
        {imageFluid ? <Img className={`${styles.image} ${imageClass || ''}`} fluid={imageFluid} style={{ height: `${height || 'auto'}` }} />
          : image && <Image className={`${styles.image} ${imageClass || ''}`} src={image} />}
      </div>
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
          <div
            className={styles.modalImageWrapper}
            onClick={e => modalEvent(e, setModal, true)}
            onKeyPress={() => setModal(true)}
            role="button"
            tabIndex={0}
          >
            {imageFluid ? <Img className={`${styles.image} ${styles.modalImage} ${imageClass || ''}`} fluid={imageFluid} />
              : image && <Image className={`${styles.image} ${styles.modalImage} ${imageClass || ''}`} src={image} />}
          </div>
          {/* The image caption */}
          <div
            className={styles.modalCaption}
            onClick={e => modalEvent(e, setModal, true)}
            onKeyPress={e => modalEvent(e, setModal, true)}
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
  image: PropTypes.string,
  imageFluid: PropTypes.object,
  caption: PropTypes.node,
  imageClass: PropTypes.string,
  height: PropTypes.string
};

export default ModalImage;
