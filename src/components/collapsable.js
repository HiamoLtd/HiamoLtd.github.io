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
      <div style={{ width:"100%", borderBottom:"5px var(--color-shadow)"}}>
        <Row>
          <Col md={4}>
            {/*TODO align type right doesn't work because we need to adjust it based on the mobile space*/}
            <Header color={ this.props.headerColor }
                    padding={0}
                    margin={0}
                    alignType="right">
              { this.props.header }
            </Header>
          </Col>
          <Col md={7} onClick={e => this.toggleOpen(e)} className="collapse-button vertical-centre centre">
              <p style={{ color:"var(" + this.props.collapsedTextColor + ")" }} className="vertical-centre collapse-text">
                { this.props.collapsedText }
              </p>
          </Col>
          <Col xs={1} onClick={e => this.toggleOpen(e)} className="vertical-centre">
            <i className={this.getArrowClass()}/>
          </Col>
        </Row>
        {/*Expanding row section*/}
        <Row className={this.getOpenClass()}>
          {/*Filler col to match the header col from above*/}
          <Col md={4}/>
          <Col md={7} className="collapse-children-text">
            {this.props.children}
          </Col>
        </Row>
      </div>
    );
  }
}

export default Collapsable;