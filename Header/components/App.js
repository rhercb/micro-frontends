import NavBar from './Navigation/NavBar/NavBar';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <nav>
        <NavBar></NavBar>
      </nav>
    </BrowserRouter>
  );
};

export default App;

ReactDOM.render(<App></App>, document.getElementById('header'));
