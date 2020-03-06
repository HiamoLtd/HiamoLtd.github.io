import React from "react"
import containerStyles from "./styles/container.module.css"
import Header from "./textcomponents/header"
import SubHeader from "./textcomponents/subheader"
import Col from "react-bootstrap/Col"

export function getHeader(props) {
  if (props.header !== undefined)
    return <Header color={props.headerColor} alignType={props.headerAlign}>{props.header}</Header>
  return "";
}

export function getVerticalAlign(verticalCentre) {
  if (verticalCentre)
    return " vertical-centre";
  return "";
}

export default props => (
  <div /*style={{ backgroundColor:'var(' + props.color + ')' }}*/ className={"col-xl-" + props.width + getVerticalAlign(props.verticalCentre)}>
    {props.image}
    { getHeader(props) }
    <p style={{ color:'var(' + props.innerTextColor + ') ' }} className={ props.innerAlign }>{ props.children }</p>
  </div>
)