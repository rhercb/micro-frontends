import React, { Suspense, lazy } from 'react';
import HomeExport from './Export';
import ReactDOM from 'react-dom';

const Header = lazy(() => import('HeaderApp/Header').then(header => header).catch(err => console.error(err)));
// const Footer = lazy(() => import('FooterApp/FooterExport').then(footer => footer).catch(err => console.error(err)));
const HomeText = lazy(() => import('HomeTextApp/HomeText').then(homeText => homeText).catch(err => console.error(err)));

const App = () => {
  return (
    <>
      <Suspense fallback='Header'><Header /></Suspense>
      <HomeExport></HomeExport>
      <Suspense fallback='Home Text'><HomeText /></Suspense>
      {/* <Suspense fallback='Footer'><Footer /></Suspense> */}
    </>
  );
};

ReactDOM.render(<App></App>, document.getElementById('home'));
