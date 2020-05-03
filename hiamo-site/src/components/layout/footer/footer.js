import React from 'react';
import { Link } from 'gatsby';

import Image from "react-bootstrap/Image"

import styles from './footer.module.css';

function getYear() {
  return new Date().getFullYear();
}

const Footer = () => (
  <div className={`${styles.container}`}>
    <div className={`${styles.wrapper} content`}>
      <div className={`${styles.column} ${styles.collapsable}`} key="footer-contact">
        <p className={ styles.info }>
          <a href="mailto:contact@hiamo.nz" className={ styles.link }>contact@hiamo.nz</a>
          <br/>
          <a href="tel:+64278609129" className={ styles.link }>+64 27 8609 129</a>
          <br/>
          <br/>
          <span className={ styles.legal }>
            © Hiamo Ltd. { getYear() }
            <br/>
            Icons by icons8
          </span>
        </p>
      </div>
      <div className={styles.column} key="footer-logo">
        {/* TODO this should also link based on the page */}
        <div className={styles.logoWrapper}>
          <Link to={"/"} className={styles.logoLink}>
              <Image src={require("../../../images/icons/logo.svg")} className={styles.logo}/>
          </Link>
        </div>
      </div>
      <div className={styles.column} key="footer-social">
        <div className={styles.socialWrapper}>
          <a href="https://www.instagram.com/hiamo_nz/">
            <Image src={require("../../../images/icons/social/instagram.svg")} className={ styles.socialIcon }/>
          </a>
          <a href="https://www.facebook.com/HiamoNZ/">
              <Image src={require("../../../images/icons/social/facebook.svg")} className={ styles.socialIcon }/>
          </a>
          <a href="https://twitter.com/HiamoNZ">
            <Image src={require("../../../images/icons/social/twitter.svg")} className={ styles.socialIcon }/>
          </a>
          <a href="https://www.linkedin.com/company/hiamo/">
            <Image src={require("../../../images/icons/social/linkedin.svg")} className={ styles.socialIcon }/>
          </a>
        </div>
      </div>
      </div>
  </div>
);

export default Footer;
