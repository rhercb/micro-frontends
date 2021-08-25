import React, { Suspense, lazy } from 'react';
import HomeExport from './Export';
import ReactDOM from 'react-dom';

const Header = lazy(() => import('HeaderApp/Header'));
const HomeText = lazy(() => import('HomeTextApp/HomeText'));

const App = () => {
  return (
    <>
      <Suspense fallback='Header'><Header /></Suspense>
      <HomeExport></HomeExport>
      <Suspense fallback='Home Text'><HomeText /></Suspense>
    </>
  );
};

ReactDOM.render(<App></App>, document.getElementById('home'));
