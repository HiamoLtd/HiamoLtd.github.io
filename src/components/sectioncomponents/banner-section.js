import React from "react"
import containerStyles from "../styles/container.module.css"
import headerStyles from "../styles/title.module.css"
import background from "../../images/banner.jpg"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

export default props => (
  <div style={{
    backgroundImage:"linear-gradient( rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2) ), url(" + background + ")" }} className={containerStyles.bannerSection + ""}>
    {/*Title row*/}
    <Row className={ containerStyles.bannerTitleContainer + " centre vertical-centre"}>
      <Col xs={2}/>
      <Col md={8}>
        <h1 style={{ color:"var(" + props.largeTextColor +")" }} className={ headerStyles.bannerHeader }>{props.largeText}</h1>
      </Col>
      <Col xs={2}/>
    </Row>
    <Row className={ containerStyles.bannerTextSection + " centre vertical-centre"}>
      <Col xs={2}/>
      <Col md={8}>
      <p style={{ color:"var(" + props.innerTextColor + ")" }} className={ headerStyles.bannerText }>
        Hiamo creates AR experiences that bring content to life by immersing users in stories, visualisations, recreations, and more.
        <br/>Get in touch to hear how we could help your heritage site, project, or idea.
      </p>
      </Col>
      <Col xs={2}/>
    </Row>
    <Row className={ containerStyles.bannerButtonSection + " centre vertical-centre"}>
      <Col xs={1}/>
      <Col md={10}>
        { props.children }
      </Col>
      <Col xs={1}/>
    </Row>
  </div>
)