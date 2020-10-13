import React from 'react';
import PropTypes from 'prop-types';

import styles from './titledcol.module.css';

const TitledCol = ({
  header, children, size, width, headerBgColor, headerColor, paddingSide = 0
}) => (
  <div className={`${styles.container} col-${size || 'xl'}-${width || '4'}`}>
    <div
      className={styles.headerWrapper}
      style={{ backgroundColor: `rgb(var(--${headerBgColor || 'color-trim'}))` }}
    >
      <h3
        className={styles.header}
        style={{
          color: `rgb(var(--${headerColor || 'color-text-light'}))`,
          paddingLeft: `${paddingSide}`,
          paddingRight: `${paddingSide}`,
        }}
      >
        {header}
      </h3>
    </div>
    <div
      className={styles.contentWrapper}
      style={{
        paddingLeft: `${paddingSide}`,
        paddingRight: `${paddingSide}`,
      }}
    >
      {children}
    </div>
  </div>
);

TitledCol.propTypes = {
  header: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  size: PropTypes.string.isRequired,
  width: PropTypes.number,
  headerBgColor: PropTypes.string,
  headerColor: PropTypes.string,
  paddingSide: PropTypes.string,
};

export default TitledCol;
