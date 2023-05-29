import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from '../Header';
import { Start } from '../Start';
import { Learn } from '../Learn';
import { About } from '../About/';
import { AuthorAndSupport } from '../AuthorAndSupport';

import './App.scss';

export const App = (): JSX.Element => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={ <Start /> } />
        <Route path="learn/:id" element={ <Learn /> } />
        <Route path="learn" element={ <Learn /> } />
        <Route path="about" element={ <About /> } />
        <Route path="author-and-support" element={ <AuthorAndSupport /> } />
      </Routes>
    </>
  );
}
