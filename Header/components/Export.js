import NavBar from './Navigation/NavBar/NavBar';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

const HeaderExport = () => {
  return (
    <BrowserRouter>
      <nav>
        <NavBar></NavBar>
      </nav>
    </BrowserRouter>
  );
};

export default HeaderExport;
