import { Button } from 'reactstrap';
import React from 'react';
export const CancelButton = ({ onClick, label }) => {
  return (
    <Button
      type='button'
      color='link'
      className=' text-decoration-none shadow-none text-uppercase'
      onClick={onClick}>
      {label}
    </Button>
  );
};
