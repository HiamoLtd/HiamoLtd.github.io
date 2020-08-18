import React from "react";

// Import bootstrap components
import { Row, Col } from "react-bootstrap";

import { Banner, Screen, Section, ProjectBox } from '../components';
import { SEO } from '../components/shared';

import styles from './project.module.css';

const title = "Aotearoa's Coastal Defence";
const subtitle = "Recreating objects digitally & returning context to heritage landmarks.";

const Project = () => (
  <Screen>
    <SEO title={title} />
    <Banner
      title={title}
      subtitle={subtitle}
    />
    <Section>
      {/* Title section */}
      {/* <Row className={styles.titleRow}>
        <Col md={12}>
          <p className={styles.date}>
            dd/mm/yy
          </p>
        </Col>
      </Row> */}
      {/* Main content section */}
      <Row className={styles.endRow}>
        {/* Left side text */}
        <Col md={6} className={styles.mainCol}>
          <p>
          New Zealand is covered in coastal defence sites, but many of them lack the naval guns that they were built for.

We bring these objects back digitally, returning context to the site and enabling lifelong learning through interaction with the models, all without the need to construct or maintain replicas.

To further engage with this history and the public, we bring these applications to the Wrights Hill Fortress open days in Wellington.
          </p>
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
