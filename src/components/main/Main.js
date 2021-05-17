import React from 'react';
import FirstArticle from './FirstArticle/FirstArticle';
import ListOfCases from './ListOfCases/ListOfCases';
import './Main.scss';
const Main = () => {
  return (
    <main className='Main'>
      <FirstArticle />
      <ListOfCases />
    </main>
  );
};

export default Main;
