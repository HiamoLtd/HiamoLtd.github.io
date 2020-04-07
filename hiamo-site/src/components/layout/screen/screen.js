import React from 'react';
import PropTypes from 'prop-types';

import styles from './screen.module.css';

const Screen = ({ children }) => (
  <>
    {/* TODO add site title query */}
    {/* <Navbar /> */}
    <div className={styles.pageWrapper}>
      <main>{children}</main>
      {/* TODO add footer */}
      {/* <Footer /> */}
    </div>
  </>
);

Screen.propTypes = {
    children: PropTypes.node.isRequired
}

export default Screen;
