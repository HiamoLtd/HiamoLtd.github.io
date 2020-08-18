import React from "react";

// Import bootstrap components
import { Row, Col } from "react-bootstrap";

import { HighlightBanner, Screen, Section, ProjectBox, ModalImage } from '../components';
import { SEO } from '../components/shared';

import styles from './project.module.css';

const title = "AOTEAROA'S COASTAL DEFENCE";
const subtitle = "Recreating objects digitally & returning context to heritage landmarks.";
const bannerImageUrl = "../../images/blogs/the-presence-of-war/screenshot.jpg"

const Project = () => (
  <Screen>
    <SEO title={title} />
    <HighlightBanner
      title={title}
      subtitle={subtitle}
      imageRef={bannerImageUrl}
    />
    <Section>
      {/* Intro image section */}
      <Row className={styles.endRow}>
      </Row>
      {/* Main text content section */}
      <Row className={styles.endRow}>
        {/* Left side text */}
        {/* TODO prob just want this as a single side. Seems easier. */}
        <Col md={6} className={styles.mainCol}>
          <p>
          New Zealand is covered in coastal defence sites, but many of them lack the naval guns that they were built for.

          We bring these objects back digitally, returning context to the site and enabling lifelong learning through interaction with the models, all without the need to construct or maintain replicas.
          </p>
        </Col>
        {/* Right side text */}
        <Col md={6} className={styles.mainCol}>
          <p>
            To further engage with this history and the public, we bring these applications to the Wrights Hill Fortress open days in Wellington.
          </p>
        </Col>
      </Row>
    </Section> 
    <Section title="OTHER PROJECTS">
      <Row className={styles.otherProjectsWrapper}>
        <ProjectBox
          title="XXXXXXXXXX"
          type="XXXXXXXXXX"
          content="XXXXXXXXXX"
          bgColor="color-secondary"
          textColor="color-text-light"
          slug="XXXXXXXXXX"
        />
        <ProjectBox
          title="XXXXXXXXXX"
          content="XXXXXXXXXX"
          bgColor="color-tertiary"
          textColor="color-text-dark"
          slug="XXXXXXXXXX"
        />
      </Row>
    </Section>

  </Screen>
)

export default Project;