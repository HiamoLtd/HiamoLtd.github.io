import React from 'react';
import PropTypes from 'prop-types';

import { Header } from '../header';
import { Footer } from '../footer';
import styles from './screen.module.css';

const Screen = ({ children }) => (
  <>
    {/* TODO add site title query */}
    <Header />
    <div className={styles.pageWrapper}>
      <main>{children}</main>
    </div>
    <Footer />
  </>
);

Screen.propTypes = {
    children: PropTypes.node.isRequired
}

export default Screen;
