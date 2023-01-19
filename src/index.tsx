import React from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';

import { BookPage, MainPage, TermsPage } from './pages';

import './assets/styles/globals.css';
import './assets/styles/normalize.css';
import './assets/styles/index.css';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path='/' element={<p>layout</p>}>
          <Route element={<p>layoutMainPage</p>}>
            <Route path='/' element={<Navigate to='/books/all' />} />
            <Route path='/books/:category' element={<MainPage />} />
            <Route path='/terms' element={<TermsPage contentView='terms' />} />
            <Route path='/contract' element={<TermsPage contentView='contract' />} />
          </Route>
          <Route path='/books/:category/:bookId' element={<BookPage />} />
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
