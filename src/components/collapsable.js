import React from "react"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Header from "./textcomponents/header"

class Collapsable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    }
    this.toggleOpen = this.toggleOpen.bind(this);
  }

  toggleOpen(e) {
    this.setState({open: !this.state.open});
  }

  getOpenClass() {
    return this.state.open ? " open-collapse " : " close-collapse ";
  }

  render() {
    return (
      <div style={{ width:"100%"}}>
        <Row>
          <Col md={4}>
            {/*TODO align type right doesn't work because we need to adjust it based on the mobile space*/}
            <Header color={ this.props.headerColor } alignType="right">{ this.props.header }</Header>
          </Col>
          <Col md={7}>
            <button  onClick={e => this.toggleOpen(e)}>
              {/*TODO need to place content in the centre for mobile*/}
              <p style={{ color:"var(" + this.props.collapsedTextColor + ")", paddingLeft:"5%" }}>
                { this.props.collapsedText }
              </p>
            </button>
          </Col>
          <Col xs={1} onClick={e => this.toggleOpen(e)}>
            {/*TODO need a dropdown button*/}
          </Col>
        </Row>
        {/*Expanding row section*/}
        <Row className={this.getOpenClass()}>
          {/*Filler col to match the header col from above*/}
          <Col md={4}/>
          <Col md={7}>
            {this.props.children}
          </Col>
        </Row>
      </div>
    );
  }
}

export default Collapsable;