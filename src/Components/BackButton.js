import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Tooltip } from 'reactstrap';

const BackButton = ({ title, route }) => {
  const [ttop, setttop] = useState(false);
  const navigate = useNavigate();
  return (
    <div className='flex-shrink-0  justify-content-end'>
      <div>
        <Tooltip
          placement='top'
          isOpen={ttop}
          target='TooltipTopBack'
          toggle={() => {
            setttop(!ttop);
          }}
        >
          {title}
        </Tooltip>
        <button
          id='TooltipTopBack'
          className='btn btn-info'
          onClick={() => {
            navigate(`/${route}`);
          }}
        >
          <i className='ri-arrow-left-line align-bottom'></i>
        </button>
      </div>
    </div>
  );
};

export default BackButton;
