/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';

// Import Bootstrap tools
import { Row, Col } from 'react-bootstrap';
import ModalImage from '../modalimage';
import Section from '../section';

import styles from './modal-image-grid.module.css';

const ModalImageGrid = ({ images = [], colCount = 2, hasLine = false }) => {
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
    <Section hasLine={hasLine} className={styles.gridWrapper}>
      {rows.map((row, i) => (
        <Row className={styles.gridRow} key={i}>
          {row.map(col => (
            <Col className={styles.gridCol} key={`${i}_${col.image}`}>
              <ModalImage image={col.image} caption={col.caption} imageClass={styles.gridImage} />
            </Col>
          ))}
        </Row>
      ))}
    </Section>
  );
};

ModalImageGrid.propTypes = {
  images: PropTypes.array.isRequired,
  colCount: PropTypes.number,
  hasLine: PropTypes.bool,
};

export default ModalImageGrid;
