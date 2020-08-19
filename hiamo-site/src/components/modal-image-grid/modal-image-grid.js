import React from 'react';
import PropTypes from 'prop-types';

// Import Bootstrap tools
import { Row, Col } from 'react-bootstrap';
import { Section, ModalImage } from '../index.js';

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
    // TODO style padding around things
    // TODO add line after
    // TODO centre hanging images
    // TODO make into box display not whatever this is. May need to refactor modal approach
    <Section hasLine={hasLine}>
      {rows.map(row => (
        <Row>
          {row.map(col => (
            <Col>
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
