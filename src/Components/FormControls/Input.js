import React from 'react';
import { FormFeedback, Input } from 'reactstrap';
import PropTypes from 'prop-types';
import { InputLabel } from './Label';

const propTypes = {
  name: PropTypes.string,
  maxLength: PropTypes.number,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  validation: PropTypes.object,
};

const defaultProps = {
  name: '',
  maxLength: 100,
  placeholder: 'Please enter here',
  type: 'text',
  validation: {},
};

export const TextBox = ({ name, maxLength, placeholder, type, validation }) => {
  return (
    <>
      <InputLabel title={'Name'} required={true} />
      <Input
        name={name}
        className='form-control'
        maxLength={maxLength}
        placeholder={placeholder}
        type={type}
        // onChange={validation.handleChange}
        // onBlur={validation.handleBlur}
        // value={validation.values.name}
        // invalid={
        //   validation.touched.name && validation.errors.name ? true : false
        // }
      />
      {/* {validation.touched.name && validation.errors.name ? (
        <FormFeedback type='invalid'>{validation.errors.name}</FormFeedback>
      ) : null} */}
    </>
  );
};

TextBox.defaultProps = defaultProps;

TextBox.propTypes = propTypes;
