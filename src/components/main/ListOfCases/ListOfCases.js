import React, { useState } from 'react';
import './ListOfCases.scss';
const ListOfCases = () => {
  const [listOpen, setListOpen] = useState(false);
  const handleClick = () => {
    setListOpen(!listOpen);
  };
  return (
    <div className='ListOfCases' id='Information'>
      <h3>All major civil and criminal cases, including:</h3>
      <ul className={`list ${listOpen ? 'open' : 'closed'}`}>
        <li>Amputation</li>
        <li>Asbestos</li>
        <li>Assault</li>
        <li>ATV Injuries and Accidents</li>
        <li>Aviation Accidents</li>
        <li>Back Injury</li>
        <li>Birth Injury</li>
        <li>Bicycle Accidents</li>
        <li>Brain Injury</li>
        <li>Broken/Fractured Bones</li>
        <li>Burn Injury</li>
        <li>Car Accidents</li>
        <li>Condemnations</li>
        <li>Construction Worker Accidents</li>
        <li>Criminal</li>
        <li>
          Crime victims in unsafe appartments, unsafe buildings, and unsafe
          parking lot
        </li>
        <li>Defamation</li>
        <li>Defective & Dangerous Products</li>
        <li>DNA</li>
        <li>Drowning</li>
        <li>Electrocution</li>
        <li>Estates</li>
        <li>Facial Injury</li>
        <li>False Arrests</li>
        <li>False Imprisonment</li>
        <li>Firearms and Gun Assaults</li>
        <li>Invasion of Privacy</li>
        <li>Knife Assaults</li>
        <li>Libel</li>
        <li>Medical Malpractice</li>
        <li>Mesothelioma & Asbestos</li>
        <li>Motorcycle Accidents</li>
        <li>Murder</li>
        <li>Neck Injury</li>
        <li>Nursing Home Abuse</li>
        <li>Paralysis</li>
        <li>Pedestrian Accidents</li>
        <li>Permanent Disability</li>
        <li>Premises Liability</li>
        <li>Quadriplegia</li>
        <li>Railroad Worker Injury / FELA</li>
        <li>Scarring/Disfigurement</li>
        <li>Slander</li>
        <li>Spinal Cord Injury</li>
        <li>Truck Accidents</li>
        <li>Trusts</li>
        <li>Vehicle Accidents</li>
        <li>Workers' Compensation</li>
        <div className={`${listOpen ? '' : 'fader'} faderContainer`}>
          <i
            className={listOpen ? `fas fa-caret-up` : `fas fa-caret-down`}
            onClick={handleClick}
          >
            <span className='showmoreBtn'>
              Show {listOpen ? 'Less' : 'More'}
            </span>
          </i>
        </div>
      </ul>
    </div>
  );
};

export default ListOfCases;
