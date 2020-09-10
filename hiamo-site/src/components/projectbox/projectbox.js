import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import { Box } from '../shared';

import styles from './projectbox.module.css';

const ProjectBox = ({
  title, subtitle, content, bgColor, textColor, width, slug
}) => (
  <Box width={width} bgColor={bgColor}>
    <Link to={`/project/${slug}`} className={styles.link}>
      <h3 className={styles.title}>{title}</h3>
      <h4 className={styles.subtitle}>{subtitle}</h4>
      <p className={styles.text} style={{ color: `rgb(var(--${textColor}))` }}>
        {content}
      </p>
      <p className={styles.readMore}>Read more...</p>
    </Link>
  </Box>
);

ProjectBox.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  content: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
  width: PropTypes.number,
  slug: PropTypes.string.isRequired,
};

export default ProjectBox;
