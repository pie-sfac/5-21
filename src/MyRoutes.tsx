import React, { lazy, Suspense } from 'react';
import { BrowserRouter as BrowserRouter, Routes, Route } from 'react-router-dom';
// 스피너 넣기!

const LinkClipsPage = lazy(() => import('./pages/LinkClipsPage'));
const RecordPage = lazy(() => import('./pages/RecordPage'));

const MyRouter = () => {
    return (
        <Suspense fallback={<div>...loading</div>}>
            <BrowserRouter>
                <Routes>
                    <Route path='/link/clips' element={<LinkClipsPage />} />
                    <Route path='/record/templates' element={<RecordPage />} />
                    <Route path='/record/create' element={<div>생성페이지입니다.</div>} />
                </Routes>
            </BrowserRouter>
        </Suspense>
    );
};

export default MyRouter;
