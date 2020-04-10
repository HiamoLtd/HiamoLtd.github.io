import React from 'react';
import PropTypes from 'prop-types';

// Import Bootstrap components
import Col from "react-bootstrap/Col";

import styles from './team.module.css'

// TODO do we want images?
const Team = ({ name, job, email, linkedIn, width, nameBgColor, nameColor }) => (
  <Col md={width || 4} className={styles.container}>
    <div className={styles.headerWrapper} style={{backgroundColor: `var(--${nameBgColor || 'color-trim'})`}}>
      <h3 className={styles.header} style={{color: `var(--${nameColor || 'color-text-light'})`}}>
        {name}
      </h3>
    </div>
    <div className={styles.contentWrapper}>
      <h4 className={styles.job}>
        {job}
      </h4>
      {email &&
        <a href={`mailto:${email}`} className={styles.email}>
          Email
        </a>
      }
      {linkedIn &&
        <a href={linkedIn} className={styles.link}>
          LinkedIn
        </a>
      }
    </div>
  </Col>
);

Team.propTypes = {
  name: PropTypes.string.isRequired,
  job: PropTypes.string.isRequired,
  email: PropTypes.string,
  linkedIn: PropTypes.string,
  width: PropTypes.number,
  nameBgColor: PropTypes.string,
  nameColor: PropTypes.string,
}

export default Team;
