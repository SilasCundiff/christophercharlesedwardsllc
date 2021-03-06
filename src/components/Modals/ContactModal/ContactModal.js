import React, { useEffect } from 'react';
import ContactForm from './ContactForm/ContactForm';
import './ContactModal.scss';
const ContactModal = ({ contactModalOpen, handleClose }) => {
  useEffect(() => {
    contactModalOpen
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = '');
  }, [contactModalOpen]);

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
        <p className='pitch'>
          After a highly successful career as a trial lawyer and hundreds of
          jury trials as a judge,{' '}
          <span className='higlighted'>
            Chris Edwards is a trial lawyer again,
          </span>{' '}
          now available to represent you in any serious civil or criminal case,
          or to help conclude your case as an arbitrator or mediator.
        </p>
        <h3>Contact Chris Edwards directly, for a quick response</h3>
        <a className='phoneLink' href='tel:770-710-6440'>
          770-710-6440
        </a>
      </div>
      <ContactForm handleClose={handleClose} />
    </div>
  );
};

export default ContactModal;
