import { createHashRouter } from 'react-router-dom';
import { NotFound } from './pages/NotFound';
import { Home } from './pages/Home';
import { Layout } from './components/Layout';
import { DisplayJobs } from './pages/DisplayJobs';
import { DisplayJob } from './pages/DisplayJob';
import { jobLoader } from './loaders/jobLoader';
import { jobsLoader } from './loaders/jobsLoader.ts';

export const router = createHashRouter([
  {
    path: '/',
    element: <Layout></Layout>,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/annonser',
        element: <DisplayJobs></DisplayJobs>,
        loader: jobsLoader,
      },
      {
        path: '/annonser/:query',
        element: <DisplayJobs></DisplayJobs>,
        loader: jobsLoader,
      },
      {
        path: '/annonser/id/:id',
        element: <DisplayJob></DisplayJob>,
        loader: jobLoader,
      },
    ],
  },
]);
