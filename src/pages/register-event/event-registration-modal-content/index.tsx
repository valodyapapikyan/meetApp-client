import React from "react";
import {
  Button,
  Input,
  Select,
  Checkbox,
  FormField,
  FormContainer
} from 'dino_ui_tools';
import * as yup from "yup";
import useEvents from "../../../hooks/use-events";

type TEventRegistrationModalContent = {eventID: string};

const EventRegistrationModalContent: React.FC<TEventRegistrationModalContent> = (props: TEventRegistrationModalContent) => {

  const initialValues = {
    company: '',
    direction: '',
    experience: '',
    email: '',
    acceptanceTermOfCondition: false
  };


  const {attendeeEvent} = useEvents();

  const validationScheme = yup.object({
    company: yup.string().required(),
    email: yup.string().required(),
    direction: yup.object().required(),
    experience:  yup.object().required(),
    acceptanceTermOfCondition:  yup.boolean().required(),

  });
  const handleSubmit = (values: typeof  initialValues) => {
    const {eventID} = props;

    //todo fix
    attendeeEvent({...values, direction: values.direction['value' as any], experience: values.experience['value' as any], },eventID)
  }

  return (
    <div>
      <div className='modal-content-heading'>
        <h1>Professional information</h1>
      </div>

      <div className='modal-content-body'>

        <FormContainer
          initialValues={initialValues}
          validationScheme={validationScheme}
          onSubmit={handleSubmit}
        >

          <FormField
            As={(props) => {
              return <Input {...props} label="Email" />;
            }}
            name={'email'}
          />

          <FormField
            As={(props) => {
              return <Input {...props} label="Company" />;
            }}
            name={'company'}
          />

          <FormField
            isControlled
            isNeedChangeHandler
            name={'direction'}
            As={(props) => {
              return (
                <Select
                  {...props}
                  placeHolder="Direction"
                  options={[{label: 'Software engineer', value: 'developer'}]}
                />
              );
            }}
          />
          <FormField
            isControlled
            isNeedChangeHandler
            name={'experience'}
            As={(props) => {
              return (
                <Select
                  {...props}
                  placeHolder="Experience"
                  options={[{label: 'Senior specialist', value: 'Senior specialist'}]}
                />
              );
            }}
          />
          <FormField
            isNeedChangeHandler
            isControlled
            name={'acceptanceTermOfCondition'}
            As={(props) => <Checkbox {...props} label={'terms of c'} />}
          />
          <Button
            buttonText="Register"
            type="primary"
            buttonActionType="submit"
            onClick={() => ({})}
          />
        </FormContainer>
      </div>
    </div>
  )
}

export default EventRegistrationModalContent
