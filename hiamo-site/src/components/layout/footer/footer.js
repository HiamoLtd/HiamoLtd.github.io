import React from 'react';
import { Link } from 'gatsby';

import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Image from "react-bootstrap/Image"

import styles from './footer.module.css';

function getYear() {
  return new Date().getFullYear();
}

const Footer = () => (
  <div className={styles.container}>
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
      <Link to={"/"} className={styles.logoLink}>
        <div className={styles.logoWrapper}>
          <Image src={require("../../../images/icons/logo_svg.svg")} className={ styles.logo }/>
        </div>
      </Link>
    </div>
    <div className={`${styles.column} ${styles.socialWrapper}`} key="footer-social">
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
  {/* <Row className={ styles.container }>
    <Col md={1}/>
    <Col md={4} className={ styles.alignOnCollapse }>
      <p className={ styles.contactText }>
        <a href="mailto:contact@hiamo.nz" className={ styles.contactLink }>contact@hiamo.nz</a>
        <br/>
        <a href="tel:+64278609129" className={ styles.contactLink }>+64 27 8609 129</a>
        <br/>
        <br/>
        <span className={ styles.legalText }>
          © Hiamo Ltd. { getYear() }
          <br/>
          Icons by icons8
      </span>
      </p>
    </Col>
    <Col md={2} className="vertical-centre">
      <Link to={"/"}>
        <div style={{ backgroundColor:"var(--color-primary)" }} className={ styles.imageContainer + " centre"}>
          <Image src={require("../../../images/icons/logo_svg.svg")} className={ styles.footerLogo }/>
        </div>
      </Link>
    </Col>
    <Col md={4} className="vertical-centre">
      <div className={ styles.socialWrapper }>
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
    </Col>
    <Col md={1}/>
  </Row> */}
  </div>
);

export default Footer;
