import React from 'react';
import './ReturnToTop.scss';

const ReturnToTop = () => {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className='Orb' onClick={handleClick}>
      <i className='fas fa-chevron-circle-up'></i>
      <p>Return To Top</p>
    </div>
  );
};

export default ReturnToTop;
