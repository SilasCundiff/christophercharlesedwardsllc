import React from 'react';
import './ContactButton.scss';
const ContactButton = ({ handleClickModal }) => {
  return (
    <div className='contact' onClick={handleClickModal}>
      <div className='contactButton'>Click to talk</div>
    </div>
  );
};
export default ContactButton;
