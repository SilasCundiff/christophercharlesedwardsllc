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
          After a highly successful career as a trial lawyer and hundred of jury
          trials as a judge, Chris Edwards is a trial lawyer again, now
          available to represent you through: any - <strong>any</strong> - major
          civil or criminal case including jury trial - to help conclude your
          case as an arbitrator or mediator.
        </p>
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
