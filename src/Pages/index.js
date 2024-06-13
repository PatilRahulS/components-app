import React, { useState } from 'react';
import Grid from './Grid';
import LineChart from './Charts/LineChart';
import PieChart from './Charts/PieChart';
import { ModalContainer } from '../Components/Modal';
import CustomButton from '../Components/Button';
import DangerButton from '../Components/DangerButton';
import BreadCrumb from '../Components/BreadCrumb';
import BackButton from '../Components/BackButton';
import { TextBox } from '../Components/FormControls/Input';
import { Card, CardBody, CardHeader, Container, Form, Row } from 'reactstrap';
import SelectDropdown from '../Components/FormControls/SelectDropdown';
import { InputLabel } from '../Components/FormControls/Label';

const Components = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Grid />
      <BreadCrumb
        title='Component Page'
        pageTitle='Component'
        route={'/inventory'}
      />
      <BackButton title={'Back To Manage'} route={'manage'} />
      <LineChart />
      <PieChart />

      <CustomButton
        label={'Open Modal'}
        onClick={() => {
          setShowModal(true);
        }}
      />
      <DangerButton label={'Delete'} />

      {showModal && (
        <ModalContainer
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          title={'test'}
          modalContent={'test'}
          buttonLable={'submit'}
        />
      )}
      <div className='page-content'>
        <Container fluid>
          <Card className='p-3'>
            <CardHeader className='border-0 p-0 mb-3  align-items-center d-flex'>
              <h4 className='card-title mb-0 flex-grow-1 text-center'>
                Add Clinic
              </h4>
            </CardHeader>

            <CardBody className='p-0 pb-2'>
              <div className='w-100'>
                <Form className='form-horizontal'>
                  <Row className='mt-3'>
                    <div className='form-group col-lg-4 col-md-12 col-sm-12 mt-1'>
                      <TextBox placeholder={'Please enter value here...'} />
                    </div>
                  </Row>

                  <Row className='mt-3'>
                    <div className='form-group col-lg-4 col-md-12 col-sm-12 mt-1'>
                      <InputLabel title={'Select Value'} />
                      <SelectDropdown
                        options={[
                          { label: 'Op1', value: 1 },
                          { label: 'Op2', value: 2 },
                        ]}
                      />
                    </div>
                  </Row>
                </Form>
              </div>
            </CardBody>
          </Card>
        </Container>
      </div>
    </>
  );
};

export default Components;
