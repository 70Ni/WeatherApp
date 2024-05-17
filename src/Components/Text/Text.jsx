import React from 'react'
import './text.css'

function Text({text,className,id}) {
  return (
    <div className="textcover">
        <div className={className} id={id}>{text}</div>
    </div>
  )
  
}

export default Text