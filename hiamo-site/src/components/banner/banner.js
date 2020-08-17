import React from 'react';
import PropTypes from 'prop-types';

// Import Bootstrap tools
import { Row, Col, Image } from 'react-bootstrap';
import { Section } from '../index.js';

import styles from './banner.module.css';

const Banner = ({ title, subtitle, imageRef }) => (
  <Section hasLine={false}>
    <Row className={styles.container}>
      <Col md={8} className={styles.titleWrapper}>
        <h1 className={styles.title}>
          {title}
        </h1>
        <h2 className={styles.subtitle}>
          {subtitle}
        </h2>
      </Col>
      <Col md={4} className={styles.imageWrapper}>
        <Image
          src={imageRef}
          className={styles.image}
        />
      </Col>
    </Row>
  </Section>
);

Banner.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  imageRef: PropTypes.string.isRequired
}

export default Banner;
