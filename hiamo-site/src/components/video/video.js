import React from 'react';

import styles from './video.module.css';

const Video = (aspectRatio = '16by9', source, title) => (
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

export default Video;
