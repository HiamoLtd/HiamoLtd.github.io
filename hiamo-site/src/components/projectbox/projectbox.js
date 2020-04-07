import React from 'react';
import PropTypes from 'prop-types';

// Import Bootstrap components
import Col from "react-bootstrap/Col"

import styles from './projectbox.module.css';

const ProjectBox = ({ title, subtitle, content, bgColor, textColor, width }) => (
  <Col md={width || 4} className={styles.container} style={{backgroundColor: `var(--${bgColor})`}}>
    <h3 className={styles.title}>
      {title}
    </h3>
    <h3 className={styles.subtitle}>
      {subtitle}
    </h3>
    <p className={styles.text} style={{color: `var(--${textColor})`}}>
      {content}
    </p>
  </Col>
);

ProjectBox.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  content: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
  width: PropTypes.number
}

export default ProjectBox;
