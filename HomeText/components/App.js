import React from 'react';
import HomeText from './Export';
import ReactDOM from 'react-dom';

const App = () => {
  return (
    <>
      <HomeText></HomeText>
    </>
  );
};

ReactDOM.render(<App></App>, document.getElementById('homeText'));
