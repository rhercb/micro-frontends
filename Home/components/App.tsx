import React from 'react';
import HomeExport from './Export';
import ReactDOM from 'react-dom';
//@ts-ignore
const Footer = React.lazy(() => import('FooterApp/Footer'));

const App = (): JSX.Element => {
  return (
    <>
      <HomeExport></HomeExport>
      <React.Suspense fallback='Footer'>
        <Footer />
      </React.Suspense>
    </>
  );
};

ReactDOM.render(<App></App>, document.getElementById('home'));
