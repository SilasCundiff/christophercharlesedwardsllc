import React from 'react';
import Nav from './Nav/Nav.js';
import Hero from './Hero/Hero.js';
import './Header.scss';
const Header = () => {
  return (
    <header className='Header'>
      <Nav />
      <Hero />
    </header>
  );
};

export default Header;
