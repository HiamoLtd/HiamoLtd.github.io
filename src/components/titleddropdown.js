import React from "react"
import Header from "./textcomponents/header"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import dropdownStyles from "./styles/titleddropdown.module.css"

export default props => (
  <div style={{ width:"100%"}}>
    <Row>
      <Col md={4}>
        {/*TODO align type right doesn't work because we need to adjust it based on the mobile space*/}
        <Header color={ props.headerColor } alignType="right">{ props.header }</Header>
      </Col>
      <Col md={7}>
        {/*TODO need to place content in the centre for mobile*/}
        <p style={{ color:"var(" + props.collapsedTextColor + ")", paddingLeft:"5%" }}>
          { props.collapsedText }
        </p>
      </Col>
      <Col xs={1}>
{/*TODO need a dropdown button*/}
      </Col>
    </Row>
    {/*Expanding row section*/}
    <Row>
      {/*Filler col to match the header col from above*/}
      <Col md={4}/>
      <Col md={7}>
        
      </Col>
    </Row>
  </div>

)
