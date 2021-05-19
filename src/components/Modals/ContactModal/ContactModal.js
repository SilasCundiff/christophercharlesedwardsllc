import React from 'react';
import ContactForm from './ContactForm/ContactForm';
import './ContactModal.scss';
const ContactModal = ({ contactModalOpen, handleClose }) => {
  console.log(`contactModalOpen`, contactModalOpen);
  return (
    <div
      className={`ContactModal ${
        contactModalOpen ? 'ModalOpen' : 'ModalClosed'
      }`}
    >
      <div className='closebtn' onClick={handleClose}>
        <i className='fas fa-times-circle'></i>
      </div>
      <div className='wrapper'>
        <h3>Contact me directly, for a quick response</h3>
        <a className='phoneLink' href='tel:770-710-6440'>
          770-710-6440
        </a>
      </div>
      <ContactForm />
    </div>
  );
};

export default ContactModal;
