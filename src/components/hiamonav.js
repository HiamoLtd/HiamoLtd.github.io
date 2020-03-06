import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from "react-bootstrap/Navbar"
import { Link } from "gatsby"
import navbarStyling from "./styles/navbar.module.css"

const NavbarLink = props => (
  <Link
    to={props.link}
    className={ navbarStyling.hiamoNavLink + " nav-link"}
  >
    {props.content}
  </Link>
)

// Create a list of link elements based on the inputted props
export function renderLinks(propLinks) {
  let linkElements = [];  // An array to hold the new html elements it creates
  for (let i = 0; i < propLinks.length; i++) {
    let linkTuple = propLinks[i];
    linkElements.push(
      <NavbarLink link={ linkTuple.link } content={linkTuple.content}/>
    )
  };
  return linkElements;
}

export default props => (
  <Navbar className={ navbarStyling.hiamoNav } expand="lg" sticky="top">
    {/*Brand sign*/}
    <Link to={ props.brandLink }>
      <Navbar.Brand>
        <img
          src={require('../images/icons/logo_name.png')}
          height="50"
          style={{ paddingLeft:'3vw' }}
          className="d-inline-block align-top"
          alt="Hiamo navbar logo"
        />
      </Navbar.Brand>
    </Link>
    {/*Collapse controls*/}
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end" style={{ paddingRight:'3vw'}}>
      {/*Links*/}
      {renderLinks(props.links)}
    </Navbar.Collapse>
  </Navbar>
)