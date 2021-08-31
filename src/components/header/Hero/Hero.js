import React from 'react';
import './Hero.scss';

// import HeroImageSmall from '../../../assets/images/resized/5-mabrafirmmarch2020_6325@0.25x.png';
// import HeroImageMed from '../../../assets/images/resized/5-mabrafirmmarch2020_6325@0.5x.png';
// import HeroImageLarge from '../../../assets/images/resized/5-mabrafirmmarch2020_6325.png';
import LowResPhoto from '../../../assets/images/resized/CCE.jpeg';
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
          src={LowResPhoto}
          alt='a portrait of Christopher Charles Edwards'
          srcSet={`${LowResPhoto} 300w,  ${LowResPhoto} 768w, ${LowResPhoto} 1000w`}
        />
      </div>
      <p className='pitch'>
        After a highly successful career as a trial lawyer and hundreds of jury
        trials as a judge,{' '}
        <span className='higlighted'>
          Chris Edwards is a trial lawyer again,
        </span>{' '}
        now available to represent you in any serious civil or criminal case, or
        to help conclude your case as an arbitrator or mediator.
      </p>
    </div>
  );
}

export default Header;
