import React, { Suspense, lazy } from 'react';
import HomeExport from './Export';
import ReactDOM from 'react-dom';

//@ts-ignore
// const Header = lazy(() => import('HeaderApp/Header').then(header => header).catch(err => console.error(err)));
// //@ts-ignore
const Footer = lazy(() => import('FooterApp/Footer').then(footer => footer).catch(err => console.error(err)));
const FooterTest = lazy(() => import('FooterApp/FooterTest').then(footer => footer).catch(err => console.error(err)));
const HomeText = lazy(() => import('HomeTextApp/HomeText').then(homeText => homeText).catch(err => console.error(err)));

const App = () => {
  return (
    <>
      <HomeExport></HomeExport>
      <Suspense fallback='Home Text'><HomeText /></Suspense>
      <Suspense fallback='Footer'><Footer /></Suspense>
      <Suspense fallback='FooterTest'><FooterTest /></Suspense>
    </>
  );
};

ReactDOM.render(<App></App>, document.getElementById('home'));
