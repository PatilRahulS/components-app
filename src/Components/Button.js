import React from 'react';
import PropTypes from 'prop-types';
import { CommonButton } from './StyledButton';

const propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,

  onClick: PropTypes.func,
};

const defaultProps = {
  className: 'p-2',
  disabled: false,
};

const CustomButton = ({ label, color, className, disabled, onClick }) => {
  return (
    <CommonButton
      className={className}
      disabled={disabled}
      onClick={onClick}
      caps='true'>
      {label}
    </CommonButton>
  );
};

CustomButton.defaultProps = defaultProps;

CustomButton.propTypes = propTypes;

export default CustomButton;
