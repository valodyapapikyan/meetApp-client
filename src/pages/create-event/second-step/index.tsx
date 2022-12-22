import React from 'react';
import * as yup from 'yup';

import {
  FormContainer,
  FormField,
  Input,
  Button,
  CustomDatePicker,
  FileUpload,
} from 'dino_ui_tools';
import useFormData from '../../../hooks/use-event-form/index';
import { WithWrapper } from '../../../components/with-stepper-wrapper';

const SecondStepContent = (): JSX.Element => {
  const initialValues = {
    location: '',
    description: '',
    image: '',
  };

  const validationScheme = yup.object({
    location: yup.string().required(),
    description: yup.string().required(),
    image: yup.mixed().required(),
  });

  const { setFormData, data } = useFormData();

  const handleSubmit = (values: any) => {
    setFormData(values);
  };


  return (
    <>
      <FormContainer
        initialValues={initialValues}
        validationScheme={validationScheme}
        onSubmit={handleSubmit}
      >
        <FormField name="location" component={Input} />
        <FormField
          name="description"
          component={CustomDatePicker}
          isControlled
        />
        <FormField
          component={FileUpload}
          name="image"
          allowedTypes={['PDF', 'XYZ', 'MKT']}
          label="Կցել ֆայլ"
          isNeedChangeHandler
        />

        <Button buttonText="next" type="primary" buttonActionType="submit" />
      </FormContainer>
    </>
  );
};

export default WithWrapper(SecondStepContent);
