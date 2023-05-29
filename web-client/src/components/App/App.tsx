import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from '../Header';
import { Start } from '../Start';
import { Learn } from '../Learn';

import './App.scss';

export const App = (): JSX.Element => {
  // const handleChangeTheme = useCallback((event: React.MouseEvent<HTMLButtonElement>, id: string): void => {
  //   let currentId = parseInt(id, 10);
  //
  //   if (!currentId) {
  //     return;
  //   }
  //
  //   switch (event.currentTarget.getAttribute('data-name')) {
  //     case 'next': {
  //       currentId++;
  //       navigate(`/learn/${currentId}`);
  //
  //       break;
  //     }
  //
  //     case 'prev': {
  //       currentId--;
  //       navigate(`/learn/${currentId}`);
  //
  //       break;
  //     }
  //   }
  // }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={ <Start /> } />
        <Route path="learn/:id" element={ <Learn /> } />
      </Routes>
    </>
  );
}
