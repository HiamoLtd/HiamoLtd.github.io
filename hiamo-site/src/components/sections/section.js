import React from 'react';
import PropTypes from 'prop-types';

import styles from './section.module.css';

const Section = ({ children, hasLine, title }) => (
  <div className={`${styles.container} ${hasLine ? styles.afterLine : ''}`}>
    <h2 className={styles.title}>{title}</h2>
    {children}
  </div>
);

Section.propTypes = {
  children: PropTypes.node.isRequired,
  hasLine: PropTypes.bool,
  title: PropTypes.string.isRequired
};

export default Section;
