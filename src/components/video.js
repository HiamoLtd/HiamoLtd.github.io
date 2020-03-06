import React from "react"

export default props => (
  <div className={ "video embed-responsive embed-responsive-" + props.aspect}>
      <iframe
        src={props.src}
        title={props.title}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        frameBorder="0"
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
        allowFullScreen
        />
  </div>
)