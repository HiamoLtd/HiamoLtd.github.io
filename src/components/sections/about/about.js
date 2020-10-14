import React from 'react';
import PropTypes from 'prop-types';

import { TitledCol } from '../../shared';

const About = ({ title, children, width }) => (
  <TitledCol
    width={width}
    header={title}
    headerBgColor="color-trim"
    headerColor="color-text-light"
    paddingSide="15px"
  >
    {children}
  </TitledCol>
);

About.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  width: PropTypes.number,
};

export default About;
