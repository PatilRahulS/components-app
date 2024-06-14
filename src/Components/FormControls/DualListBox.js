import React from 'react';
import DualListBox from 'react-dual-listbox';

import PropTypes from 'prop-types';
import 'react-dual-listbox/lib/react-dual-listbox.css';

const propTypes = {
  selected: PropTypes.array,
  setSelected: PropTypes.func,
  options: PropTypes.array,
  isDisabled: PropTypes.bool,
};

const defaultProps = {
  selected: [{ label: '', value: '' }],
  setSelected: () => {},
  options: [
    { value: 'one', label: 'Option One' },
    { value: 'two', label: 'Option Two' },
  ],
  isDisabled: false,
};

export const MultiSelect = ({ options, selected, setSelected, isDisabled }) => {
  const onChange = (select) => {
    setSelected(select);
  };

  return (
    <DualListBox
      name='selectedClinics'
      options={[
        { value: 'one', label: 'Option One' },
        { value: 'two', label: 'Option Two' },
      ]}
      selected={selected}
      onChange={onChange}
      // onBlur={validation.handleBlur}
      value={selected}
      disabled={isDisabled}
      icons={{
        moveLeft: <span className='mdi mdi-chevron-left' key='key' />,
        moveAllLeft: [
          <span className='mdi mdi-chevron-double-left' key='key' />,
        ],
        moveRight: <span className='mdi mdi-chevron-right' key='key' />,
        moveAllRight: [
          <span className='mdi mdi-chevron-double-right' key='key' />,
        ],
        moveDown: <span className='mdi mdi-chevron-down' key='key' />,
        moveUp: <span className='mdi mdi-chevron-up' key='key' />,
        moveTop: <span className='mdi mdi-chevron-double-up' key='key' />,
        moveBottom: <span className='mdi mdi-chevron-double-down' key='key' />,
      }}
    />
  );
};

MultiSelect.defaultProps = defaultProps;

MultiSelect.propTypes = propTypes;
