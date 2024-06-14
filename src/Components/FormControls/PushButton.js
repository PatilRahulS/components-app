import React from 'react';
import { FormGroup, Input, Label } from 'reactstrap';
import PropTypes from 'prop-types';

const propTypes = {
  isChecked: PropTypes.bool,
  setIsChecked: PropTypes.func,
};

const defaultProps = {
  isChecked: false,
  setIsChecked: () => {},
};

const PushButton = ({ isChecked, setIsChecked }) => {
  return (
    <>
      <FormGroup switch className=' form-check mx-2 form-switch-lg'>
        <Input
          id='cutomSwitchsizelg'
          type='switch'
          className=' form-check-input'
          checked={isChecked}
          onChange={(e) => {
            setIsChecked(!isChecked);
          }}
        />
        <Label className=' form-check-label'>Large Switch</Label>
      </FormGroup>
    </>
  );
};

export default PushButton;

PushButton.defaultProps = defaultProps;

PushButton.propTypes = propTypes;
