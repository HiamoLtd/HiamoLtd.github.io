import React from "react"
import footerStyles from "../styles/footer.module.css"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Image from "react-bootstrap/Image"
import { Link } from "gatsby"


export function getYear() {
  return new Date().getFullYear();
}

export default () => (
  <Row className={ footerStyles.footerContainer }>
    <Col md={1}/>
    <Col md={4} className={ footerStyles.alignOnCollapse }>
      <p className={ footerStyles.contactText }>
        <a href="mailto:contact@hiamo.nz" className={ footerStyles.contactLink }>contact@hiamo.nz</a>
        <br/>
        <a href="tel:+64278609129" className={ footerStyles.contactLink }>+64 27 8609 129</a>
        <br/>
        <br/>
        <span className={ footerStyles.legalText }>
          © Hiamo Ltd. { getYear() }
          <br/>
          Icons by icons8
      </span>
      </p>
    </Col>
    <Col md={2} className="vertical-centre centre">
      <Link to={"/"}>
        <div style={{ backgroundColor:"var(--color-primary)" }} className={ footerStyles.imageContainer + " centre"}>
          <Image src={require("../../images/icons/logo_svg.svg")} className={ footerStyles.footerLogo }/>
        </div>
      </Link>
    </Col>
    <Col md={4} className="vertical-centre">
      <div className={ footerStyles.socialWrapper }>
        <a href="https://www.instagram.com/hiamo_nz/">
          <Image src={require("../../images/icons/social/instagram.svg")} className={ footerStyles.socialIcon }/>
        </a>
        <a href="https://www.facebook.com/HiamoNZ/">
          <Image src={require("../../images/icons/social/facebook.svg")} className={ footerStyles.socialIcon }/>
        </a>
        <a href="https://twitter.com/HiamoNZ">
          <Image src={require("../../images/icons/social/twitter.svg")} className={ footerStyles.socialIcon }/>
        </a>
        <a href="https://www.linkedin.com/company/hiamo/">
          <Image src={require("../../images/icons/social/linkedin.svg")} className={ footerStyles.socialIcon }/>
        </a>
      </div>
    </Col>
    <Col md={1}/>
  </Row>
)