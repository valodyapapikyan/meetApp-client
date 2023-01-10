import React from 'react';
import { WithWrapper } from '../../../components/with-stepper-wrapper';
import useFormData from '../../../hooks/use-event-form';
import useEvents from '../../../hooks/use-events/index';
import { Button } from 'dino_ui_tools';
import { normalizeEventCreationData } from '../../../helpers/utils/index';

const MeetAppDetails = (): JSX.Element => {
  const { setFormData, data } = useFormData();
  const { createEvent } = useEvents();


  return (
    <div>
      <h1>meet app details </h1>
      <Button
        buttonText="finish"
        type="primary"
        onClick={() => createEvent(normalizeEventCreationData(data))}
      />
    </div>
  );
};

export default WithWrapper(MeetAppDetails);
