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
    { value: '+/-' },
    { value: '%' },
    { value: '÷', className: 'operator' },
    { value: '7' },
    { value: '8' },
    { value: '9' },
    { value: 'x', className: 'operator' },
    { value: '4' },
    { value: '5' },
    { value: '6' },
    { value: '-', className: 'operator' },
    { value: '1' },
    { value: '2' },
    { value: '3' },
    { value: '+', className: 'operator' },
    { value: '0' },
    { value: '.' },
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
