import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

// Import Bootstrap components
import Col from 'react-bootstrap/Col';

import styles from './box.module.css';

const Box = ({
  children, width, bgColor, to
}) => (
  <Col lg={width || 4} sm={6} className={styles.container}>
    { to ? (
      <Link to={to} className={`${styles.box} ${styles.link}`} style={{ backgroundColor: `rgb(var(--${bgColor}))` }}>
        {children}
      </Link>
    ) : (
      <div className={styles.box} style={{ backgroundColor: `rgb(var(--${bgColor}))` }}>
        {children}
      </div>
    )}
  </Col>
);

Box.propTypes = {
  bgColor: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  width: PropTypes.number,
  to: PropTypes.string
};

export default Box;
