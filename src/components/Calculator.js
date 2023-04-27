import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Buttons from './Buttons';
import calculate from '../logic/calculate';

function Screen({ result }) {
  Screen.propTypes = { result: PropTypes.string.isRequired };
  return <div className="screen">{result}</div>;
}

function Calculator() {
  const [dataObj, setDataObj] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (e) => {
    setDataObj(calculate(dataObj, e.target.innerText));
  };

  const displayValue = () => {
    if (dataObj.next) {
      return Number(dataObj.next).toLocaleString();
    }
    if (dataObj.total) {
      return Number(dataObj.total).toLocaleString();
    }

    return '0';
  };

  const buttons = [
    { value: 'AC', className: 'clear' },
    { value: '+/-', className: 'number' },
    { value: '%', className: 'number' },
    { value: '÷', className: 'operator' },
    { value: '7', className: 'number' },
    { value: '8', className: 'number' },
    { value: '9', className: 'number' },
    { value: 'x', className: 'operator' },
    { value: '4', className: 'number' },
    { value: '5', className: 'number' },
    { value: '6', className: 'number' },
    { value: '-', className: 'operator' },
    { value: '1', className: 'number' },
    { value: '2', className: 'number' },
    { value: '3', className: 'number' },
    { value: '+', className: 'operator' },
    { value: '0', className: 'number' },
    { value: '.', className: 'number' },
    { value: '=', className: 'equal operator' },
  ];
  return (
    <div className="calculator">
      <Screen result={displayValue()} />
      <div className="buttons">
        {buttons.map((button) => (
          <Buttons
            key={button.value}
            value={button.value}
            className={button.className}
            name={button.name}
            handleClick={handleClick}
          />
        ))}
      </div>
    </div>
  );
}

export default Calculator;
