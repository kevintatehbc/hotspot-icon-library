import React from 'react';
import './Icon.css';

const Icon = ({ children, classList, onClick }) => {
  return (
    <div className={classList ? "icon " + classList : "icon"} onClick={onClick}>{children}</div>
  );
}

export default Icon;
