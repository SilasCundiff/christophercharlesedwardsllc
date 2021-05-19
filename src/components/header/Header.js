import React from 'react';
import Nav from './Nav/Nav.js';
import Hero from './Hero/Hero.js';
import './Header.scss';
const Header = ({ handleClickModal, windowOffset, setWindowOffset }) => {
  return (
    <header className='Header'>
      <Nav
        handleClickModal={handleClickModal}
        windowOffset={windowOffset}
        setWindowOffset={setWindowOffset}
      />
      <Hero />
    </header>
  );
};

export default Header;
