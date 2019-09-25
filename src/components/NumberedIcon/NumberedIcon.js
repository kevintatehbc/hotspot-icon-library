import React from 'react';
import Icon from '../Icon/Icon';
import AsideContent from '../AsideContent/AsideContent';
import './NumberedIcon.css';

const NumberedIcon = ({ number, classList }) => {
  const showContent = (event) => {
    event.target.parentElement.querySelector('.aside_content').classList.toggle('show-block');
  }

  return (
    <div className="numbered_icon">
      <Icon classList={"numbered_icon-icon " + classList} onClick={showContent}>
        <span className="center">{number ? number : 1}</span>
      </Icon> 
      <AsideContent />
    </div>
  );
}

export default NumberedIcon;
