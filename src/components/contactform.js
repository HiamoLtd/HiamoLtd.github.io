import React from "react"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import btnStyles from "./styles/button.module.css"

export default props => (
  // Attach Netlify form handling to form
  <form method="post"
        netlify-honeypot="bot-field"
        data-netlify="true"
    style={{ width:"100%" }}>
    <input type="hidden" name="bot-field"/>
    {/*A row for name and organisation*/}
    <Row style={{ padding:"3% 5% 0 5%", margin:0 }}>
      <Col md={6}>
        <label htmlFor="name">
          Your name
        </label>
        <br/>
        <input type="text" name="name"  id="name"/>
      </Col>
      <Col md={6}>
        <label htmlFor="company">
          Company or organisation
        </label>
        <br/>
        <input type="text" name="company"  id="company"/>
      </Col>
    </Row>
    {/*A row for email*/}
    <Row style={{ padding:"2.5% 5% 0 5%", margin:0 }}>
      <Col md={12}>
        <label htmlFor="email">
          Your email
        </label>
        <br/>
        <input type="email" name="email" id="email" placeholder="This one's a must have." required/>
      </Col>
    </Row>
    {/*A row for content*/}
    <Row style={{ padding:"2.5% 5% 0% 5%", margin:0 }}>
      <Col md={12}>
        <label htmlFor="message">
          Write us a message!
        </label>
        <br/>
        <textarea name="message"/>
      </Col>
    </Row>
    {/*A row for a submission button*/}
    <Row style={{ padding:"2.5% 5% 5% 5%", margin:0 }} className="centre">
      <div className={ btnStyles.hiamoBtn + " " + btnStyles.submitBtn }>
        <input className={ btnStyles.hiamoBtnText + " " + btnStyles.labelBtn } type="submit" id="contact-send" value="Send"/>
      </div>
    </Row>
  </form>
)