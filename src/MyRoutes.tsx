import React, { lazy, Suspense } from 'react';
import {
  BrowserRouter as BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Loading from './components/common/Loading';
import { DeleteModal } from './components/link/modal/DleteModal';

const Login = lazy(() => import('./pages/Login'));
const LinkPage = lazy(() => import('./pages/Link'));
const Record = lazy(() => import('./pages/Record'));
const RecordInterviewNew = lazy(() => import('./pages/RecordInterviewNew'));
const RecordTreatmentNew = lazy(() => import('./pages/RecordTreatmentNew'));
const RecordEdit = lazy(() => import('./pages/RecordEdit'));
const RecordDetail = lazy(() => import('./pages/RecordDetail'));

const MyRouter = () => {
  return (
    <Suspense fallback={<Loading />}>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/media" element={<LinkPage />} />
          <Route path="/employee" element={<DeleteModal />} />
          <Route path="/ticket" element={<div>ticket</div>} />
          <Route path="/record" element={<Record />} />
          <Route path="/record/interview" element={<RecordInterviewNew />} />
          <Route path="/record/treatment" element={<RecordTreatmentNew />} />
          <Route path="/record/edit" element={<RecordEdit />} />
          <Route path="/record/detail/:id" element={<RecordDetail />} />
          <Route path="/media" element={<div>media</div>} />
          <Route path="/manage" element={<div>manage</div>} />
          <Route path="/alert" element={<div>alert</div>} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

export default MyRouter;
