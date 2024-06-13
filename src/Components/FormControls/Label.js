import React from 'react';
import { Label } from 'reactstrap';
import PropTypes from 'prop-types';

const propTypes = {
  title: PropTypes.string,
  required: PropTypes.bool,
};

const defaultProps = {
  title: '',
  required: false,
};

export const InputLabel = ({ title, required }) => {
  return (
    <Label className='form-label'>
      {title} {required && '*'}
    </Label>
  );
};

InputLabel.defaultProps = defaultProps;

InputLabel.propTypes = propTypes;
