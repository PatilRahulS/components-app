import React from 'react';
import { Button } from 'reactstrap';
import PropTypes from 'prop-types';

const propTypes = {
  label: PropTypes.string,
  color: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  key: PropTypes.string,
  onClick: PropTypes.func,
};

const defaultProps = {
  label: 'Add',
  color: 'primary',
  className: 'p-2',
  disabled: false,
  key: '',
};

const CustomButton = ({ label, color, className, disabled, key, onClick }) => {
  return (
    <Button
      className={className}
      color={color}
      disabled={disabled}
      key={key}
      onClick={onClick}>
      {label}
    </Button>
  );
};

CustomButton.defaultProps = defaultProps;

CustomButton.propTypes = propTypes;

export default CustomButton;
