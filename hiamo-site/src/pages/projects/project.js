import React from "react";

// Import bootstrap components
import { Row, Col } from "react-bootstrap";

import { Screen, Section, ProjectBox } from '../../components';
import { SEO } from '../../components/shared';

import styles from './project.module.css';

const Project = () => (
  <Screen>
    <SEO title="XXXXXXXXX" />
    <Section title="XXXXXXXXX" mainHeader>
      {/* Title section */}
      <Row className={styles.titleRow}>
        <Col md={12}>
          <p className={styles.date}>
            dd/mm/yy
          </p>
        </Col>
      </Row>
      {/* Main content section */}
      <Row className={styles.endRow}>
        {/* Left side text */}
        <Col md={6} className={styles.mainCol}>
        </Col>
        {/* Right side text */}
        <Col md={6} className={styles.mainCol}>
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
