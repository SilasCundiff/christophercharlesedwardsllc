import React from 'react';
import ContactButton from '../independent/ContactButton/ContactButton';
import BlackDivider from '../independent/Dividers/BlackDivider/BlackDivider';
import PatternDivider from '../independent/Dividers/PatternDivider/PatternDivider';
import FirstArticle from './FirstArticle/FirstArticle';
import ListOfCases from './ListOfCases/ListOfCases';
import './Main.scss';
const Main = ({ handleClickModal }) => {
  return (
    <main className='Main'>
      <BlackDivider />
      <FirstArticle />
      <PatternDivider />
      <ListOfCases />
      <ContactButton handleClickModal={handleClickModal} />
    </main>
  );
};

export default Main;
