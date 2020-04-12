import React from 'react';
import PropTypes from 'prop-types';

import styles from './section.module.css';

const Section = ({ children, hasLine = true, title, mainHeader=false }) => (
  <div className={`${styles.container} ${hasLine ? styles.afterLine : ''}`}>
    {(title && !mainHeader) &&
      <h2 className={styles.title}>{title}</h2>
    }
    {(title && mainHeader) &&
      <h1 className={styles.title}>{title}</h1>
    }
    {children}
  </div>
);

Section.propTypes = {
  children: PropTypes.node.isRequired,
  hasLine: PropTypes.bool,
  title: PropTypes.string
};

export default Section;
