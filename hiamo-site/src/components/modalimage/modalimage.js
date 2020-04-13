import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Import Bootstrap tools
import { Image } from 'react-bootstrap';
import styles from './modalimage.module.css';


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
  <div className={styles.modal} style={{display: (modalOpen ? 'block' : 'none')}}>
    {/* Close modal */}
    <span
      className={styles.modalCross}
      onClick={() => setModal(false)}
    >
      &times;
    </span>
    {/* Modal image */}
    <Image
      src={image}
      className={styles.modalImage}
    />
    {/* The image caption */}
    <div className={styles.modalCaption}>
      {caption}
    </div>
  </div>
  </>
);
};

export default ModalImage;