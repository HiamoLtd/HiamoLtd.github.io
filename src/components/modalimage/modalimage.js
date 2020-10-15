/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Import Bootstrap tools
import Img from 'gatsby-image';
import { Image } from 'react-bootstrap';
import Modal from '../modal';
import styles from './modalimage.module.css';

const ModalImage = ({
  image, imageFluid, height, imageClass, caption
}) => {
  const [modalUpdater, setModalUpdater] = useState({ key: '', open: false });

  return (
    <>
      <div
        className={`${styles.imageWrapper} ${imageClass || ''}`}
        tabIndex={0}
        role="button"
        onClick={() => setModalUpdater({ key: `open-trigger-${Math.random()}`, open: true })}
        onKeyPress={() => setModalUpdater({ key: `open-trigger-${Math.random()}`, open: true })}
      >
        {imageFluid ? (
          <Img
            className={`${styles.image} ${imageClass || ''}`}
            fluid={imageFluid}
            style={{ height: `${height || 'auto'}` }}
          />
        ) : (
          image && <Image className={`${styles.image} ${imageClass || ''}`} src={image} />
        )}
      </div>
      <Modal key={modalUpdater.key} isOpen={modalUpdater.open}>
        {/* Modal image */}
        <div
          className={styles.modalImageWrapper}
          data-modal-retainer={false}
        >
          {imageFluid ? (
            <Img
              className={`${styles.image} ${styles.modalImage} ${imageClass || ''}`}
              fluid={imageFluid}
              data-modal-retainer
            />
          ) : (
            image && (
              <Image
                className={`${styles.image} ${styles.modalImage} ${imageClass || ''}`}
                src={image}
                data-modal-retainer
              />
            )
          )}
        </div>
        {/* The image caption */}
        <div
          className={styles.modalCaption}
          data-modal-retainer
        >
          {caption}
        </div>
      </Modal>
    </>
  );
};

ModalImage.propTypes = {
  image: PropTypes.string,
  imageFluid: PropTypes.object,
  caption: PropTypes.node,
  imageClass: PropTypes.string,
  height: PropTypes.string,
};

export default ModalImage;
