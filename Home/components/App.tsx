import React, { Suspense, lazy } from 'react';
import HomeExport from './Export';
import ReactDOM from 'react-dom';
//@ts-ignore
// const Header = lazy(() => import('HeaderApp/Header'));
// //@ts-ignore
// const Footer = lazy(() => import('FooterApp/Footer'));

const App = (): JSX.Element => {
  return (
    <>
      <Suspense fallback='Header'>{/* <Header /> */}</Suspense>
      <HomeExport></HomeExport>
      <Suspense fallback='Footer'>{/* <Footer /> */}</Suspense>
    </>
  );
};

ReactDOM.render(<App></App>, document.getElementById('home'));
