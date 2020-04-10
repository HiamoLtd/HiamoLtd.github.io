import React from 'react';
import PropTypes from 'prop-types';

import { Box } from '../shared';

import styles from './projectbox.module.css';

const ProjectBox = ({ title, subtitle, content, bgColor, textColor, width }) => (
  <Box width={width} bgColor={bgColor}>
    <h3 className={styles.title}>
      {title}
    </h3>
    <h4 className={styles.subtitle}>
      {subtitle}
    </h4>
    <p className={styles.text} style={{color: `var(--${textColor})`}}>
      {content}
    </p>
  </Box>
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
