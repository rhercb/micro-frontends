import React from 'react';
import Card from './Card/Card';
import ReactDOM from 'react-dom';

const App = () => {
  return (
    <>
      <Card></Card>
    </>
  );
};

ReactDOM.render(<App></App>, document.getElementById('card'));
