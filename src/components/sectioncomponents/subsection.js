import React from "react"
import containerStyles from "../styles/container.module.css"

export function getPadding(removePadding) {
  if (removePadding) {
    return "0";
  }
  return "5%";
}

export default props => (
  <div style={{ backgroundColor:'var(' + props.color + ')', paddingTop: getPadding(props.removePadding)  }} className={ props.alignType + " row"}>
      { props.children }
  </div>
)