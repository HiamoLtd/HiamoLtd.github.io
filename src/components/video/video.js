import React from 'react';
import PropTypes from 'prop-types';

import styles from './video.module.css';

const Video = ({ aspectRatio = '16by9', source, title }) => (
  <div className={`${styles.container} embed-responsive embed-responsive-${aspectRatio}`}>
    <iframe
      src={source}
      title={title}
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      frameBorder="0"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      allowFullScreen
    />
  </div>
);

Video.propTypes = {
  title: PropTypes.string.isRequired,
  aspectRatio: PropTypes.string,
  source: PropTypes.string.isRequired
};

export default Video;
