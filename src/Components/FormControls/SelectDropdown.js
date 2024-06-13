import React from 'react';
import Select from 'react-select';
import { customStyles } from './SelectCustomStyle';

import PropTypes from 'prop-types';

const propTypes = {
  id: PropTypes.string,
  selected: PropTypes.object,
  setSelected: PropTypes.func,
  options: PropTypes.array,
  isDisabled: PropTypes.bool,
};

const defaultProps = {
  id: '',
  selected: { label: '', value: '' },
  setSelected: () => {},
  options: [],
  isDisabled: false,
};

const SelectDropdown = ({ selected, setSelected, options, id, isDisabled }) => {
  return (
    <Select
      id={id}
      name={id}
      value={selected}
      onChange={(e) => {
        setSelected(e);
      }}
      styles={customStyles}
      options={options}
      isDisabled={isDisabled || false}
      className='basic-multi-select col-12'
      classNamePrefix='select'
    />
  );
};

export default SelectDropdown;

SelectDropdown.defaultProps = defaultProps;

SelectDropdown.propTypes = propTypes;
