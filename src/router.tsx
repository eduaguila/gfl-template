import { Suspense, lazy } from 'react';
import { Navigate } from 'react-router-dom';
import { RouteObject } from 'react-router';

import SidebarLayout from 'src/layouts/SidebarLayout';
import BaseLayout from 'src/layouts/BaseLayout';

import SuspenseLoader from 'src/components/SuspenseLoader';

const Loader = (Component) => (props) =>
  (
    <Suspense fallback={<SuspenseLoader />}>
      <Component {...props} />
    </Suspense>
  );

// Pages

const Overview = Loader(lazy(() => import('src/content/overview')));

// Future Of Work Stations

const EmployeeExperience = Loader(lazy(() => import('src/content/FutureOfWork/EmployeeExperience')));

const HiddenWorkers = Loader(lazy(() => import('src/content/FutureOfWork/HiddenWorkers')));

const ExtendedReality = Loader(lazy(() => import('src/content/FutureOfWork/ExtendedReality')));

const ConnectedWorkers = Loader(lazy(() => import('src/content/FutureOfWork/ConnectedWorkers')));

const CultureByDesign = Loader(lazy(() => import('src/content/FutureOfWork/CultureByDesign')));


// Status
const Status404 = Loader(
  lazy(() => import('src/content/pages/Status/Status404'))
);

const routes: RouteObject[] = [
  {
    path: '',
    element: <BaseLayout />,
    children: [
      {
        path: '/',
        element: <Overview />
      },
      {
        path: 'overview',
        element: <Navigate to="/" replace />
      },
      {
        path: '*',
        element: <Status404 />
      }
    ]
  },
  {
    path: 'FutureOfWork',
    element: <SidebarLayout />,
    children: [
      {
        path: '',
        element: <Navigate to="employeeExperience" replace />
      },
      {
        path: 'employeeExperience',
        element: <EmployeeExperience />
      },
      {
        path: 'hiddenWorkers',
        element: <HiddenWorkers /> 
      },
      {
        path: 'connectedWorkers',
        element: <ConnectedWorkers />
      },
      {
        path: 'extendedReality',
        element: <ExtendedReality /> 
      },
      {
        path: 'cultureByDesign',
        element: <CultureByDesign /> 
      },
    ]
  },
];

export default routes;
