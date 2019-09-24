import React from 'react';
import './Icon.css';

const Icon = ({ children, classList, onClick }) => {
  return (
    classList ? 
      <div className={"icon " + classList} onClick={onClick}>{children}</div> :
      <div className="icon">{children}</div>
  );
}

export default Icon;
