import React, {useState} from 'react';
import * as yup from 'yup';

import {
  FormContainer,
  FormField,
  Input,
  Button,
  SimpleDatePicker,
  FileUpload,
  TextArea,
} from 'dino_ui_tools';
import useFormData from '../../../hooks/use-event-form/index';
import { WithWrapper } from '../../../components/with-stepper-wrapper';

const SecondStepContent = (props: any): JSX.Element => {
  const initialValues = {
    location: '',
    description: '',
    image: '',
    timeFrame: '12-12',
    hasTimeFrame: false
  };

  const validationScheme = yup.object({
    location: yup.string().required(),
    description: yup.string().required(),
    image: yup.mixed().required(),
    timeFrame: yup.string().required(),
    hasTimeFrame: yup.boolean().required(),
  });

  const { setFormData, data } = useFormData();

  const handleSubmit = (values: any) => {
    setFormData({ ...data, ...values, image: fileString });
    props.nextHandler();
  };

  console.log(data);


  const [fileString, setFileString] = useState<any>('');
  const getFile = (file:File) => {
  const reader = new FileReader();
    reader.onloadend = () => {
      setFileString(reader.result);

    };
    reader.readAsDataURL(file);
  }

  return (
    <>
      <FormContainer
        initialValues={initialValues}
        validationScheme={validationScheme}
        onSubmit={handleSubmit}
      >
        <FormField
          As={(props) => {
            return <Input {...props} label="location" />;
          }}
          name={'location'}
        />
        <FormField
          As={(props) => {
            return <TextArea {...props} onChange={() => ({})} />;
          }}
          name={'description'}
        />

         <FormField
          As={(props) => (
            <FileUpload
              {...props}
              label="Կցել ֆայլ"
              getFiles={getFile}
            />
          )}
          name="image"
          isNeedChangeHandler
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

export default WithWrapper(SecondStepContent);
