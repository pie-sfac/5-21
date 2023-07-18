import React, { lazy, Suspense } from 'react';
import {
  BrowserRouter as BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
// 스피너 넣기!

const LinkClipsPage = lazy(() => import('./pages/LinkClipsPage'));

const MyRouter = () => {
  return (
    <Suspense fallback={<div>...loading</div>}>
      <BrowserRouter>
        <Routes>
          <Route path="/link/clips" element={<LinkClipsPage />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

export default MyRouter;
