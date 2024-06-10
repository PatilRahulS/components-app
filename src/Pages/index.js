import React, { useState } from 'react';
import Grid from './Grid';
import LineChart from './Charts/LineChart';
import PieChart from './Charts/PieChart';
import { ModalContainer } from '../Components/Modal';
import CustomButton from '../Components/Button';

const Components = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Grid />
      <LineChart />
      <PieChart />

      <CustomButton
        label={'Open Modal'}
        color={'secondary'}
        onClick={() => {
          setShowModal(true);
        }}></CustomButton>

      {showModal && (
        <ModalContainer
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          title={'test'}
          modalContent={'test'}
          buttonLable={'submit'}
        />
      )}
    </>
  );
};

export default Components;
