import React from "react"
import PropTypes from "prop-types"

// Import Bootstrap tools
import { Row, Col, Image } from "react-bootstrap"
import { Section } from "../index.js"

import styles from "./modal-image-grid.module.css"

const ModalImageGrid = ({ images = [], colCount = 2, hasLine = false }) => {
  let rows = [];
  let currCol = 1, currRow = 0;
  // Loop over all the images and arrange them into columns
  for (const imageCombo of images) {
    rows[currRow] = rows[currRow] ? [...rows[currRow], imageCombo] : [imageCombo];
    if (currCol >= colCount) {
      currRow++;
      currCol = 1;
    } else {
      currCol++;
    }
  }
  console.log(rows);
  return (
    <Section hasLine={hasLine}>
      { images.forEach((image, index) => {
        console.log('Curr img:', image, index);
      }
      )}
      Hi
    </Section>
  );
};

ModalImageGrid.propTypes = {
  images: PropTypes.array.isRequired,
  colCount: PropTypes.number,
  hasLine: PropTypes.bool,
};

export default ModalImageGrid;
