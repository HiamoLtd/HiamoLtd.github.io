import React from 'react';
import PropTypes from 'prop-types';

// Import Bootstrap components
import Col from "react-bootstrap/Col";

import styles from './box.module.css';

const Box = ({ children, width, bgColor }) => (
  <Col
    md={width || 4}
    className={styles.container}
    style={{backgroundColor: `var(--${bgColor})`}}
  >
    {children}
  </Col>
);

Box.propTypes = {
  bgColor: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  width: PropTypes.number
}

export default Box;