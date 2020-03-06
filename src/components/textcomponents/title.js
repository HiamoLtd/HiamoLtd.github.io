import React from "react"
import titleStyles from "../styles/title.module.css"

export default props => (
  <h1 style={{ color:'var(' + props.color + ')'}}
      className={ props.alignType + " " + titleStyles.hiamoTitle }>
    { props.children }
  </h1>
)