import React from 'react';
import './PulseAnimation.css'

const PulseAnimation = (props) => {
  return (
    <div className="pulse">
      {props.children}
    </div>
  )
}

export default PulseAnimation;
