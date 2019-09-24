import React from 'react';
import Icon from '../Icon/Icon';
import './NumberedIcon.css';

const NumberedIcon = ({ number, classList }) => {
  return (
    number ? 
    <Icon classList={"numbered_icon " + classList}>
      <span className="center">{number}</span>
    </Icon> :
    <Icon classList={"numbered_icon " + classList}>
      <span className="center">1</span>
    </Icon>
  );
}

export default NumberedIcon;
