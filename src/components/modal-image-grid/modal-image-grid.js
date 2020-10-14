/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';

// Import Bootstrap tools
import { Row, Col } from 'react-bootstrap';
import ModalImage from '../modalimage';

import styles from './modal-image-grid.module.css';

const ModalImageGrid = ({ images = [], colCount = 2 }) => {
  const rows = [];
  let currCol = 1;
  let currRow = 0;
  // Loop over all the images and arrange them into columns
  images.forEach((imageCombo) => {
    rows[currRow] = rows[currRow] ? [...rows[currRow], imageCombo] : [imageCombo];
    if (currCol >= colCount) {
      currRow += 1;
      currCol = 1;
    } else {
      currCol += 1;
    }
  });
  return (
    <div className={styles.gridWrapper}>
      {rows.map((row, i) => (
        <Row className={styles.gridRow} key={i}>
          {row.map(col => (
            <Col className={styles.gridCol} key={`${i}_${col.image}`} md={Math.round(12 / colCount)}>
              <ModalImage
                imageFluid={col.fluidImage}
                image={col.staticImage}
                caption={col.caption}
                imageClass={styles.gridImage}
              />
            </Col>
          ))}
        </Row>
      ))}
    </div>
  );
};

ModalImageGrid.propTypes = {
  images: PropTypes.array.isRequired,
  colCount: PropTypes.number
};

export default ModalImageGrid;
