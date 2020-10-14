import React from 'react';
import PropTypes from 'prop-types';

import styles from './subsection.module.css';

const SubSection = ({ children, hasLine = true, title }) => (
  <div className={`${styles.container} ${hasLine ? styles.afterLine : ''}`}>
    <h2 className={styles.title}>{title}</h2>
    {children}
  </div>
);

SubSection.propTypes = {
  children: PropTypes.node.isRequired,
  hasLine: PropTypes.bool,
  title: PropTypes.string.isRequired
};

export default SubSection;
