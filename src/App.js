import React, { useState } from 'react';
import ReturnToTop from './components/independent/ReturnToTop/ReturnToTop';
import Header from './components/header/Header.js';
import Main from './components/main/Main.js';
import './scss/global.scss';
import Footer from './components/footer/Footer';

import AgreementModal from './components/Modals/AgreementModal/AgreementModal';
import ContactModal from './components/Modals/ContactModal/ContactModal';

function App() {
  const [agreementModalOpen, setAgreementModalOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);

  const handleContinue = () => {
    setContactModalOpen(!contactModalOpen);
    setAgreementModalOpen(false);
  };

  const handleClickModal = () => {
    if (!contactModalOpen) setAgreementModalOpen(!agreementModalOpen);
  };

  const handleClose = () => {
    setAgreementModalOpen(false);
    setContactModalOpen(false);
  };

  return (
    <div
      className={`appBody ${
        agreementModalOpen || contactModalOpen ? 'no-scroll' : 'scroll'
      }`}
    >
      <Header handleClickModal={handleClickModal} />
      <Main handleClickModal={handleClickModal} />

      <Footer />
      <ReturnToTop />
      <AgreementModal
        agreementModalOpen={agreementModalOpen}
        handleContinue={handleContinue}
        handleClose={handleClose}
      />
      <ContactModal
        contactModalOpen={contactModalOpen}
        handleClose={handleClose}
      />
    </div>
  );
}

export default App;
