import React from 'react';
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

const SpeakerInformation = (props: any): JSX.Element => {
  const initialValues = {
    speakerFullName: '',
    speakerCompany: '',
    topic: '',
  
  };

  const validationScheme = yup.object({
    speakerFullName: yup.string().required(),
    speakerCompany: yup.string().required(),
    topic:  yup.string().required(),

  });

  const { setFormData, data } = useFormData();

  const handleSubmit = (values: any) => {

    setFormData({ ...data, speaker: values });
    props.nextHandler();
  };

  console.log(data);

  return (
    <>
      <FormContainer
        initialValues={initialValues}
        validationScheme={validationScheme}
        onSubmit={handleSubmit}
      >
        <FormField
          As={(props) => {
            return <Input {...props} label="full Name" />;
          }}
          name={'speakerFullName'}
        />
        <FormField
          As={(props) => {
            return <Input {...props} label="company" />;
          }}
          name={'speakerCompany'}
        />

        <FormField
          As={(props) => {
            return <TextArea {...props} onChange={() => ({})} label='topic' />;
          }}
          name={'topic'}
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

export default WithWrapper(SpeakerInformation);
