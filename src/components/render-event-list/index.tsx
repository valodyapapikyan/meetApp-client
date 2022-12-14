import React, { FC, useState } from 'react';
import useEvents from '../../hooks/use-events/index';
import { IEvent } from '../../types/index';
import { Popup } from 'dino_ui_tools';
import SignupPopupContent from '../sign-up-popup-content';
import { useNavigate } from 'react-router';
import useAuth from '../../hooks/use-auth/index';

import { Button } from 'dino_ui_tools';


const EventListRender: FC<any> = () => {
  const { redirectUrl } = useAuth();
  const { redirectTo, eventsList } = useEvents();

  const [isOpen, setOpen] = useState<boolean>(false);

  const redirect = (eventID: string) => {
    redirectTo(eventID, setOpen);
  };

  const closePopup = () => setOpen(false);

  return (
    <div>
      <Popup onClose={closePopup} isOpen={isOpen}>
        <div>
          <SignupPopupContent redirectUrl={redirectUrl} />
        </div>
      </Popup>
      {eventsList?.map(({ location, name, description, dateTime, eventID }) => {
        return (
          <div key={eventID}>
            <div>{name}</div>
            <div>{description}</div>
            <div>{location}</div>
            <div>{dateTime}</div>
            <Button
              buttonText="Register"
              type="primary"
              onClick={() => redirect(eventID)}
            />
          </div>
        );
      })}
    </div>
  );
};
export default EventListRender;
