import React, { useState } from 'react';
import './Nav.scss';

function Nav({ handleClickModal }) {
  const [toggled, setToggled] = useState(true);

  const handleClick = () => {
    setToggled(!toggled);
  };
  const closeNav = () => {
    setToggled(true);
  };

  return (
    <nav className='Nav'>
      <span className='navToggler' onClick={handleClick}>
        <i className={`fas fa-bars ${toggled ? 'visible' : 'hidden'}`}></i>
        <i className={`fas fa-times ${toggled ? 'hidden' : 'visible'}`}></i>
      </span>
      <nav className={`navWrapper ${toggled ? 'closed' : 'open'}`}>
        <ul>
          <li>
            <a href='#Home' onClick={closeNav}>
              Home
            </a>
          </li>
          <li>
            <a href='#Articles' onClick={closeNav}>
              Articles
            </a>
          </li>
          <li>
            <a href='#Information' onClick={closeNav}>
              Information
            </a>
          </li>
        </ul>
      </nav>
      <div className='contactBanner' onClick={handleClickModal}>
        <div className='contactBtn'>Click To Talk</div>
      </div>
    </nav>
  );
}

export default Nav;
