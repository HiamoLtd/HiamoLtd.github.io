import React from "react"
import PropTypes from "prop-types"

// Import Bootstrap tools
import { Row, Col, Image } from "react-bootstrap"
import { Section } from "../index.js"

import styles from "./highlight-banner.module.css"
import ModalImage from "../modalimage/index.js"

const HighlightBanner = ({ title, subtitle, imageRef, imageCaption }) => (
  <Section hasLine={false}>
    <Row className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      <h2 className={styles.subtitle}>{subtitle}</h2>
    </Row>
    <Row className={styles.imageContainer}>
      <ModalImage image={imageRef} caption={imageCaption} />
    </Row>
  </Section>
)

HighlightBanner.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  imageRef: PropTypes.string.isRequired,
}

export default HighlightBanner
