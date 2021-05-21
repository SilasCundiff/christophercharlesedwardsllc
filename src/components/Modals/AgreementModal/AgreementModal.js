import React, { useEffect } from 'react';
import './AgreementModal.scss';
const AgreementModal = ({
  agreementModalOpen,
  handleClose,
  handleContinue,
}) => {
  useEffect(() => {
    agreementModalOpen
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = '');
  }, [agreementModalOpen]);

  return (
    <div
      className={`AgreementModal ${
        agreementModalOpen ? 'ModalOpen' : 'ModalClosed'
      }`}
    >
      <div className='closebtn' onClick={handleClose}>
        <i className='fas fa-times-circle'></i>
      </div>
      <div className='notice'>
        <h3>
          <strong>Please Read</strong>
        </h3>
        <div className='list'>
          <div>
            1. Chris Edwards cannot discuss any case he decided as a judge.
          </div>
          <div>
            2. No legal representation exists unless and until a written
            contract for legal representation is signed by client and Chris
            Edwards.
          </div>
        </div>
      </div>
      <div className='buttonbox'>
        <span onClick={handleContinue}>Agree and Continue</span>
      </div>
    </div>
  );
};

export default AgreementModal;
