import React from 'react';
import Buttons from './Buttons';

function Screen() {
  return <div className="screen">0</div>;
}

function Calculator() {
  const buttons = [
    { value: 'AC', className: 'clear' },
    { value: '+/-', className: 'operator' },
    { value: '%', className: 'operator', name: '/' },
    { value: '÷', className: 'operator', name: 'plusminus' },
    { value: '7' },
    { value: '8' },
    { value: '9' },
    { value: '×', className: 'operator', name: '*' },
    { value: '4' },
    { value: '5' },
    { value: '6' },
    { value: '–', className: 'operator', name: '-' },
    { value: '1' },
    { value: '2' },
    { value: '3' },
    { value: '+', className: 'operator', name: '+' },
    { value: '0' },
    { value: '.' },
    { value: '=', className: 'equal operator' },
  ];
  return (
    <div className="calculator">
      <Screen />
      <div className="buttons">
        {buttons.map((button) => (
          <Buttons
            key={button.value}
            value={button.value}
            className={button.className}
            name={button.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Calculator;
