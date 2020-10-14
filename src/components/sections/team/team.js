import React from 'react';
import PropTypes from 'prop-types';

import { TitledCol } from '../../shared';
import styles from './team.module.css';

// TODO do we want images?
const Team = ({
  name, job, email, linkedIn, width, nameBgColor, nameColor
}) => (
  <TitledCol
    width={width}
    header={name}
    headerBgColor={nameBgColor}
    headerColor={nameColor}
    paddingSide="30px"
    size="sm"
  >
    <h4 className={styles.job}>{job}</h4>
    {email && (
      <a href={`mailto:${email}`} className={styles.email}>
        Email
      </a>
    )}
    {linkedIn && (
      <a href={linkedIn} className={styles.link}>
        LinkedIn
      </a>
    )}
  </TitledCol>
);

Team.propTypes = {
  name: PropTypes.string.isRequired,
  job: PropTypes.string.isRequired,
  email: PropTypes.string,
  linkedIn: PropTypes.string,
  width: PropTypes.number,
  nameBgColor: PropTypes.string,
  nameColor: PropTypes.string,
};

export default Team;
