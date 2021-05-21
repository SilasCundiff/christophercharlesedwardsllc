import React from 'react';
import './Hero.scss';

import HeroImageSmall from '../../../assets/images/resized/5-mabrafirmmarch2020_6325@0.25x.png';
import HeroImageMed from '../../../assets/images/resized/5-mabrafirmmarch2020_6325@0.5x.png';
import HeroImageLarge from '../../../assets/images/resized/5-mabrafirmmarch2020_6325.png';

function Header() {
  return (
    <div className='Hero'>
      <div className='text-wrapper'>
        <h1>
          <span className='name'>Chris Edwards</span>
        </h1>
        <h2>
          <span className='title'>Trial Lawyer</span>
        </h2>
      </div>
      <div className='HeroImage'>
        <img
          src={HeroImageSmall}
          alt='a portrait of Christopher Charles Edwards'
          srcSet={`${HeroImageSmall} 300w,  ${HeroImageMed} 768w, ${HeroImageLarge} 1000w`}
        />
      </div>
      <p className='pitch'>
        After a highly successful career as a trial lawyer and hundred of jury
        trials as a judge, Chris Edwards is a trial lawyer again, now available
        to represent you through: any - <strong>any</strong> - major civil or
        criminal case including jury trial - to help conclude your case as an
        arbitrator or mediator.
      </p>
    </div>
  );
}

export default Header;
