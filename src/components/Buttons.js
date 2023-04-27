import React from 'react';
import PropTypes from 'prop-types';

function Buttons({ value, className, handleClick }) {
  Buttons.propTypes = {
    value: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
    handleClick: PropTypes.func.isRequired,
  };
  return (
    <button type="button" className={className} onClick={handleClick}>
      {value}
    </button>
  );
}

export default Buttons;
