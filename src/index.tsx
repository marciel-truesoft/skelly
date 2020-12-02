import { lazy, Suspense } from 'react';

const HelloWorld = lazy(() => import('./components/hello-world'));

export const App = () => {
  return (
    <Suspense fallback={<p>loading...</p>}>
      <HelloWorld />
    </Suspense>
  );
}
