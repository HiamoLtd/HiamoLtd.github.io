import React from 'react';
import PropTypes from 'prop-types';

// Import Bootstrap tools
import { Row, Col, Image } from 'react-bootstrap';
import Section from '../section';

import styles from './banner.module.css';

const Banner = ({
  title, subtitle, bannerImageUrl, backgroundImageUrl
}) => (
  <Section hasLine={false} className={styles.container} backgroundImageUrl={backgroundImageUrl}>
    <Row className={styles.wrapper}>
      <Col md={8} className={styles.titleWrapper}>
        <h1 className={styles.title}>{title}</h1>
        <h2 className={styles.subtitle}>{subtitle}</h2>
      </Col>
      {bannerImageUrl && (
        <Col md={4} className={styles.imageWrapper}>
          <Image src={bannerImageUrl} className={styles.image} />
        </Col>
      )}
    </Row>
  </Section>
);

Banner.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  bannerImageUrl: PropTypes.string.isRequired,
  backgroundImageUrl: PropTypes.string.isRequired
};

export default Banner;
