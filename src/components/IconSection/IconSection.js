import React from 'react';
import './IconSection.css';

const IconSection = (props) => {
  return (
    <div className="icon-section">
      {props.children}
    </div>
  );
}

export default IconSection;
