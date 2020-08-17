import React from 'react';

// Import Bootstrap tools
import { Row, Col } from 'react-bootstrap';

import { Section } from '../../index.js';
import ContactForm from './contactform.js';

import styles from './contact.module.css';

const Contact = () => (
  <Section>
    <Row className={styles.container}>
      <Col md={4} className={styles.titleWrapper}>
        <h3 className={styles.title}>
          CONTACT US
        </h3>
        <h5 className={styles.subtitle}>
          Get in touch to hear how we can help with your heritage site, project, or idea.
        </h5>
      </Col>
      <Col md={8} className={styles.contactWrapper}>
        <ContactForm />
      </Col>
    </Row>
  </Section>
);

export default Contact;
