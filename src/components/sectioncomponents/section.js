import React from "react"
import containerStyles from "../styles/container.module.css"

export function checkWidth(originalWidth) {
  let width = originalWidth;
  if (width === undefined) {
    width = 8;
  }
  return width;
}

export default props => (
  <div style={{ backgroundColor:'var(' + props.color + ')' }} className={ "row " + containerStyles.section}>
    <div className={ "col-md-" + ((12 - checkWidth(props.width)) / 2)}/>
    <div className={ "col-lg-" + checkWidth(props.width) }>
      { props.children }
    </div>
    <div className={ "col-md-2" + ((12 - checkWidth(props.width)) / 2) }/>
  </div>
)