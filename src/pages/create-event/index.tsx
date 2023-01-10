import React from 'react';
import { Stepper } from 'dino_ui_tools';

import FirstStepContent from './first-step';
import SecondStepContent from './second-step';
import SpeakerInformation from './speaker-information';
import MeetAppDetails from './meet-app-details'

import { FormDataProvider } from '../../contexts/form';

const CreateEvent = () => {
  return (
    <div style={{ marginTop: '200px' }}>
      <FormDataProvider>
        <Stepper list={[FirstStepContent, SecondStepContent,SpeakerInformation,MeetAppDetails]} />
      </FormDataProvider>
    </div>
  );
};

export default CreateEvent;
