import React from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';

import { Layout, LayoutMainPage } from './components';
import { BookPage, MainPage, TermsPage } from './pages';
import { BOOKS_ROUTE, CONTRACT_PAGE_ROUTE, HOME_PAGE_ROUTE, TERMS_PAGE_ROUTE } from './utils';

import './assets/styles/globals.css';
import './assets/styles/normalize.css';
import './assets/styles/index.css';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
    <React.StrictMode>
        <HashRouter>
            <Routes>
                <Route path={HOME_PAGE_ROUTE} element={<Layout />}>
                    <Route element={<LayoutMainPage />}>
                        <Route path={HOME_PAGE_ROUTE} element={<Navigate to='/books/all' />} />
                        <Route path={`${BOOKS_ROUTE}/:category`} element={<MainPage />} />
                        <Route path={TERMS_PAGE_ROUTE} element={<TermsPage contentView='terms' />} />
                        <Route path={CONTRACT_PAGE_ROUTE} element={<TermsPage contentView='contract' />} />
                    </Route>
                    <Route path={`${BOOKS_ROUTE}/:category/bookId`} element={<BookPage />} />
                </Route>
            </Routes>
        </HashRouter>
    </React.StrictMode>
);
