import React from 'react';
import * as yup from 'yup';
import moment from 'moment';

import {
  FormContainer,
  FormField,
  Input,
  Button,
  CustomDatePicker,
} from 'dino_ui_tools';

import { WithWrapper } from './../../../components/with-stepper-wrapper';
import useFormData from '../../../hooks/use-event-form';



const FirstStepContent = (props: any): JSX.Element => {
  const { setFormData } = useFormData();

  const initialValues = {
    theme: '',
    date: new Date(),
    time: new Date(),
  };

  const validationScheme = yup.object({
    theme: yup.string().required(),
    date: yup.string().required(),
    time: yup.string().required(),
  });
  
  const handleSubmit = (data: any) => {
    const date = moment(data.date).format('YYYY-MM-DD');
    const time = moment(data.time).format('HH:mm:ss');

    setFormData({ ...data, date, time });
    props.nextHandler();
  };

  return (
    <>
      <FormContainer
        initialValues={initialValues}
        validationScheme={validationScheme}
        onSubmit={handleSubmit}
      >
        <FormField name="theme" component={Input} />
        <FormField name="date" component={CustomDatePicker} isControlled />
        <FormField
          name="time"
          component={CustomDatePicker}
          timeOnly
          isControlled
        />

        <Button buttonText="next" type="primary" buttonActionType="submit" />
      </FormContainer>
    </>
  );
};

export default WithWrapper(FirstStepContent);
