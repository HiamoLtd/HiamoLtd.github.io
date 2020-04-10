import React from 'react';
import PropTypes from 'prop-types';

// Import Bootstrap components
import Col from "react-bootstrap/Col";

import styles from './titledcol.module.css'

const TitledCol = ({ header, children, width, headerBgColor, headerColor, paddingSide=0 }) => (
  <Col md={width || 4} className={styles.container}>
    <div className={styles.headerWrapper} style={{backgroundColor: `var(--${headerBgColor || 'color-trim'})`}}>
      <h3
        className={styles.header} 
        style={{
          color: `var(--${headerColor || 'color-text-light'})`,
          paddingLeft:`${paddingSide}`,
          paddingRight:`${paddingSide}`
        }}
      >
        {header}
      </h3>
    </div>
    <div
      className={styles.contentWrapper}
      style={{
        paddingLeft:`${paddingSide}`,
        paddingRight:`${paddingSide}`
      }}
    >
      {children}
    </div>
  </Col>
);

TitledCol.propTypes = {
  header: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  width: PropTypes.number,
  headerBgColor: PropTypes.string,
  headerColor: PropTypes.string,
  paddingSide: PropTypes.number,
}

export default TitledCol;
