import React, { lazy, Suspense } from 'react';
import { BrowserRouter as BrowserRouter, Routes, Route } from 'react-router-dom';
// Components
import Nav from './components/Header';

const LinkClipsPage = lazy(() => import('./pages/LinkClipsPage'));
const Record = lazy(() => import('./pages/Record'));

const MyRouter = () => {
    return (
        <Suspense fallback={<div>...loading</div>}>
            <BrowserRouter>
                <Nav />
                <Routes>
                    <Route path='/link/clips' element={<LinkClipsPage />} />
                    <Route path='/record' element={<Record />} />
                    <Route path='/record/create' element={<div>생성 페이지입니다.</div>} />
                    <Route path='/record/edit/:id' element={<div>수정 페이지입니다.</div>} />
                    <Route path='/record/detail/:id' element={<div>상세보기 페이지입니다.</div>} />
                </Routes>
            </BrowserRouter>
        </Suspense>
    );
};

export default MyRouter;
