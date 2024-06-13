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

const DangerButton = ({ label, color, className, disabled, onClick }) => {
  return (
    <CommonButton
      className={className}
      color='#F06548'
      bordercolor='#F06548'
      disabled={disabled}
      onClick={onClick}
      caps='true'>
      {label}
    </CommonButton>
  );
};

DangerButton.defaultProps = defaultProps;

DangerButton.propTypes = propTypes;

export default DangerButton;
