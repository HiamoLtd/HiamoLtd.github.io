import React from "react"
import containerStyles from "../styles/container.module.css"

export default props => (
  <div style={{ backgroundColor:'var(' + props.bgColor + ')' }} className={ containerStyles.section + " row"}>
    <div className="col-md-1"/>
    <div className={ containerStyles.hiamoRoundedDiv + " " + containerStyles.boxShadow + " col-lg-10 "} style={{ backgroundColor:'var(' + props.color + ')', margin: '0 5px' }}>
      <div className="row" style={{ margin:0 }}>
      <div className="col-md-1"/>
        <div className=" col-lg-10">
        { props.children }
        </div>
      <div className="col-md-1"/>
      </div>
    </div>
    <div className="col-md-1"/>
  </div>
)