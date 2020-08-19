import React from 'react';
import PropTypes from 'prop-types';

// Import Bootstrap tools
import { Row } from 'react-bootstrap';
import Section from '../section/section.js';

import styles from './highlight-banner.module.css';
import ModalImage from '../modalimage';
import Video from '../video/video.js';

const HighlightBanner = ({
  title, subtitle, imageRef, imageCaption, videoSource, videoTitle
}) => (
  <Section hasLine={false}>
    <Row className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      <h2 className={styles.subtitle}>{subtitle}</h2>
    </Row>
    <Row className={styles.imageContainer}>
      {videoSource ? (
        <Video source={videoSource} title={videoTitle} />
      ) : (
        imageRef && <ModalImage image={imageRef} caption={imageCaption} />
      )}
    </Row>
  </Section>
);

HighlightBanner.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  imageRef: PropTypes.string,
  videoSource: PropTypes.string,
  videoTitle: PropTypes.string,
  imageCaption: PropTypes.string,
};

export default HighlightBanner;
