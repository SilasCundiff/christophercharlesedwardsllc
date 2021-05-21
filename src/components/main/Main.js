import React from 'react';
import ContactButton from '../independent/ContactButton/ContactButton';

import PatternDivider from '../independent/Dividers/PatternDivider/PatternDivider';
import FirstArticle from './FirstArticle/FirstArticle';
import ListOfCases from './ListOfCases/ListOfCases';
import './Main.scss';
const Main = ({ handleClickModal }) => {
  return (
    <main className='Main'>
      <FirstArticle />
      <PatternDivider />
      <ListOfCases />
      <ContactButton handleClickModal={handleClickModal} />
    </main>
  );
};

export default Main;
