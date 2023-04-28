import React from 'react';
import './App.css';
import Calculator from './components/Calculator';
import Quotes from './components/Quotes';

function App() {
  return (
    <div className="wrapper">
      <Calculator />
      <Quotes category="family" />
    </div>
  );
}

export default App;
