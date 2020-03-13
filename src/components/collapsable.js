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

  getArrowClass() {
    return this.state.open ? " up " : " down ";
  }

  render() {
    return (
      <div className="collapsable">
        <Row>
          <Col md={4}>
            <Header color={ this.props.headerColor }
                    padding={0}
                    alignType="align-about">
              { this.props.header }
            </Header>
          </Col>
          <Col lg={7} onClick={e => this.toggleOpen(e)} className="collapse-button vertical-centre centre">
              <p style={{ color:"var(" + this.props.collapsedTextColor + ")" }} className="vertical-centre collapse-text">
                { this.props.collapsedText }
              </p>
          </Col>
          <Col xs={1} onClick={e => this.toggleOpen(e)} className="vertical-centre arrow-container">
            <i className={this.getArrowClass()}/>
          </Col>
        </Row>
        {/*Expanding row section*/}
        <Row className={this.getOpenClass()}>
          {/*Filler col to match the header col from above*/}
          <Col md={4}/>
          <Col md={6} className="collapse-children-text align-about-text">
            {this.props.children}
          </Col>
          <Col md={2}/>
        </Row>
      </div>
    );
  }
}

export default Collapsable;