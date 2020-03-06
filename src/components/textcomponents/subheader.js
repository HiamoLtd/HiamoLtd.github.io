import React from "react"
import titleStyles from "../styles/title.module.css"

export default props => (
  <h3 style={{ color:'var(' + props.color + ')', paddingTop:'3%' }}
      className={props.alignType + " " + titleStyles.hiamoSubheader}>
    { props.children }
  </h3>
)