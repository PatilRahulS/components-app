import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import { CancelButton } from './CancelButton';
import CustomButton from './Button';

export const ModalContainer = ({
  isOpen,
  onClose,
  title,
  modalContent,
  buttonLable,
  disable,
}) => {
  return (
    <Modal isOpen={isOpen} fade={false} centered>
      <ModalHeader className='bg-soft-info p-3' toggle={onClose}>
        {title}
      </ModalHeader>
      <ModalBody>{modalContent}</ModalBody>
      <ModalFooter className='justify-content-center'>
        <div className='hstack gap-2 '>
          <CancelButton onClick={onClose} label={'Cancel'} />
          <CustomButton
            disable={disable}
            onClick={() => {}}
            label={buttonLable}
          />
        </div>
      </ModalFooter>
    </Modal>
  );
};
