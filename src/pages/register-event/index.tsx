import React, {FC, useState} from 'react';
import {Button, Popup} from "dino_ui_tools";
import useEvents from "../../hooks/use-events";
import {useParams} from "react-router";
import EventRegistrationModalContent from "./event-registration-modal-content";
import NotificationDialogContent
  from "../../components/notification-dialog-content";
import {unAssignRequestStatus} from "../../utils";
import {REQUEST_STATUS} from "../../enums";

const RegisterEvent: FC<any> = () => {

  const {eventID} = useParams();

  const {requestStatus, setRequestStatus} = useEvents()

  const [isOpen, setOpen] = useState<boolean>(false);

  const closePopup = () => {
    setOpen(false);
    setRequestStatus(unAssignRequestStatus())
  }

  const registerEvent = () => {
    setOpen(true);
  }

  const renderModalContent = (status: REQUEST_STATUS) => {
    if (status === 1) {
      return <NotificationDialogContent message='success' type='success'/>
    }
    return <EventRegistrationModalContent eventID={eventID as string}/>

  }

  return (
    <div style={{marginTop: '700px'}}>
      <Popup onClose={closePopup} isOpen={isOpen}>
        {renderModalContent(requestStatus.status)}
      </Popup>
      <h1>register event</h1>

      <Button
        buttonText="register"
        type="primary"
        buttonActionType="submit"
        onClick={registerEvent}
      />
    </div>
  )
}

export default RegisterEvent; 
