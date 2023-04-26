import React from 'react';
import PropTypes from 'prop-types';

function Buttons(props) {
  Buttons.propTypes = {
    value: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
  };
  const { value, className } = props;
  return (
    <button type="button" className={className}>
      {value}
    </button>
  );
}

export default Buttons;
