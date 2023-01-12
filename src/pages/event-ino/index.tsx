import React, {FC, useEffect, useState} from 'react';
import EventListRender from '../../components/render-event-list';
import useEvents from '../../hooks/use-events/index';
import {useLocation, useParams} from "react-router";
import {Button, Popup} from 'dino_ui_tools'
import SignupPopupContent from "../../components/signup-popup-content";
import useAuth from "../../hooks/use-auth";

const EventInfo: FC<any> = () => {

  const {getEvent, event, redirectToEventRegister} = useEvents();
  const {redirectUrl} = useAuth()
  const {eventID} = useParams();

  useEffect(() => {
    getEvent(eventID as string)
  }, [eventID])

  const {date, description, gudelinnes, image, time, location, name} = event;

  const [isOpen, setOpen] = useState<boolean>(false);

  const redirect = (eventID: string) => {
    redirectToEventRegister(eventID, setOpen);
  };

  const closePopup = () => setOpen(false);

  return (
    <div>
      <Popup onClose={closePopup} isOpen={isOpen}>
        <div>
          <SignupPopupContent redirectUrl={redirectUrl}/>
        </div>
      </Popup>
      <div>
        <h1>{name}</h1>
        <div>{gudelinnes}</div>
        <div>
          <span>{date}</span>,
          <span>{time}</span>
          <span>{location}</span>
          <Button
            buttonText="Register"
            type="primary"
            onClick={() => redirect(eventID as string)}/>
          <span></span>
        </div>
      </div>
      <div>
        <img src={image} alt=""/>
      </div>
      <div>
        <h1>details</h1>
        <span>{description}</span>
        <div>
          <span>{date}</span>,
          <span>{time}</span>
          <span>{location}</span>
        </div>
      </div>
    </div>
  );
};
export default EventInfo;
