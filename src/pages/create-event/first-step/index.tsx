import React from 'react';
import * as yup from 'yup';
import moment from 'moment';

import {
  FormContainer,
  FormField,
  Input,
  Button,
  SimpleDatePicker,
  Select,
  TimePicker,
} from 'dino_ui_tools';

import { WithWrapper } from './../../../components/with-stepper-wrapper';
import useFormData from '../../../hooks/use-event-form';

const FirstStepContent = (props: any): JSX.Element => {
  const { setFormData } = useFormData();

  const initialValues = {
    name: '',
    date: new Date(),
    time: new Date(),
    gudelinnes: '',
  };

  const validationScheme = yup.object({
    name: yup.string().required(),
    gudelinnes: yup.object().required(),
    date: yup.string().required(),
    time: yup.string().required(),
  });

  const handleSubmit = (data: any) => {
    const date = moment(data.date).format('YYYY-MM-DD');
    const time = moment(data.time).format('HH:mm:ss');

    setFormData({ ...data, date, time });
    props.nextHandler();
  };

  const onSelect = () => {};

  return (
    <>
      <FormContainer
        initialValues={initialValues}
        validationScheme={validationScheme}
        onSubmit={handleSubmit}
      >
        <FormField
          As={(props) => {
            return <Input {...props} label="First Name" />;
          }}
          name={'name'}
        />

        <FormField
          isControlled
          isNeedChangeHandler
          name={'gudelinnes'}
          As={(props) => {
            return (
              <Select
                {...props}
                placeHolder="Select country"
                options={[{ label: 'label', value: 'value' }]}
              />
            );
          }}
        />

        <FormField
          isControlled
          name={'date'}
          As={(props) => <SimpleDatePicker {...props} label="date picker" />}
        />
        <FormField
          isControlled
          As={(props) => <TimePicker {...props} label="time picker" />}
          name={'time'}
        />

        <Button
          buttonText="next"
          type="primary"
          buttonActionType="submit"
          onClick={() => ({})}
        />
      </FormContainer>
    </>
  );
};

export default WithWrapper(FirstStepContent);
