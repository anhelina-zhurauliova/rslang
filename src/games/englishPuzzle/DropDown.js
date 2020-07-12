import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const DropDown = ({ options }) => {
  const [selectedOption, setSelectedOption] = useState(options[0].value);
  return (
    <select value={selectedOption} onChange={e => setSelectedOption(e.target.value)}>
      {options.map(o => (
        <option value={o.value}>{o.label}</option>
      ))}
    </select>
  );
};

DropDown.propTypes = {
  options: PropTypes.array,
};
