import React, { lazy, Suspense } from 'react';
import {
  BrowserRouter as BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import NavBar from './components/nav/NavBar';
import Loading from './components/common/Loading';

// 스피너 넣기!

const LinkPage = lazy(() => import('./pages/Link'));

const MyRouter = () => {
  return (
    <Suspense fallback={<Loading />}>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/media" element={<LinkPage />} />
          <Route path="/employee" element={<div>직원 관리</div>} />
          <Route path="/ticket" element={<div>ticket</div>} />
          <Route path="/record" element={<div>record</div>} />
          <Route path="/media" element={<div>media</div>} />
          <Route path="/manage" element={<div>manage</div>} />
          <Route path="/alert" element={<div>alert</div>} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

export default MyRouter;
