import React from "react"
import BtnStyles from "./styles/button.module.css"

// Set the color of the button based on whether it is hovered or not
const setBackground = (event, color) => {
  const target = event.target;
  target.style.backgroundColor = 'var(' + color + ')';
}

export default props => (
  <a href={ props.link }
     onMouseEnter={event => setBackground(event, props.hoverColor)}
     onMouseOut={event => setBackground(event, props.color)}
     className={ BtnStyles.hiamoBtn + " " +  BtnStyles.hiamoBtnText }
     style={{ backgroundColor:'var(' + props.color + ')', color:'var(' + props.textColor +')' }}>
    { props.text }
  </a>
)