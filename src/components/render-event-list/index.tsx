import React, { FC, useState } from 'react';
import useEvents from '../../hooks/use-events/index';
import { IEvent } from '../../types/index';
import { Popup ,Button} from 'dino_ui_tools';
import SignupPopupContent from '../signup-popup-content';
import { useNavigate } from 'react-router';
import useAuth from '../../hooks/use-auth/index';

import './index.scss'
const EventListRender: FC<any> = () => {
  const { redirectUrl } = useAuth();
  const { redirectToEventRegister, eventsList,redirectToEventInfoPage } = useEvents();

  const [isOpen, setOpen] = useState<boolean>(false);

  const redirect = (eventID: string) => {
    redirectToEventRegister(eventID, setOpen);
  };

  const closePopup = () => setOpen(false);

  return (
    <>
      <Popup onClose={closePopup} isOpen={isOpen}>
        <div>
          <SignupPopupContent redirectUrl={redirectUrl} />
        </div>
      </Popup>
      {eventsList?.map(({ location, name, gudelinnes, date, eventID,image }) => {
        return (
          <div key={eventID} className='event-item'>
            <img className='img' src={image} alt=""/>
            <h1>{name}</h1>
            <div>{gudelinnes}</div>
            <div>{location}</div>
            <div>{date}</div>
            <Button
              buttonText="Register"
              type="primary"
              onClick={() => redirect(eventID)}
            />
            <div onClick={() => redirectToEventInfoPage?.(eventID)}> learn more </div>
          </div>
        );
      })}
    </>
  );
};
export default EventListRender;
