import React from "react"
import titleStyles from "../styles/title.module.css"

export default props => (
  <h2 style={{ color:'var(' + props.color + ') ', padding: props.padding, margin: props.margin }}
      className={props.alignType + " " + titleStyles.hiamoHeader }>
    { props.children }
  </h2>
)