import React, { lazy, Suspense } from 'react';

const LazyServicesPage = lazy(() => import('./ServicesPage'));

const ServicesPage = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyServicesPage {...props} />
  </Suspense>
);

export default ServicesPage;
