import React, {
  createContext,
  FC,
  useContext,
  useMemo,
  useState,
  useEffect,
} from 'react';
import moment from 'moment';
import {IEvent, IEventContextType, IEventProviderProps} from '../../types';
import {eventService} from '../../services/event-service/index';
import {useNavigate} from 'react-router-dom';
import useAuth from '../../hooks/use-auth/index';
import {UseRedirect} from '../../hooks/use-redirect';
import useFormData from '../../hooks/use-event-form';
import {REQUEST_NAMES, REQUEST_STATUS} from "../../enums";

export const EventContext = createContext<IEventContextType>(
  {} as IEventContextType
);

const initialEventStateValue = {
  date: "",
  description: "",
  eventID: "",
  gudelinnes: "",
  image: "",
  location: "",
  name: "",
  time: ""
}


export type TRequestStatus = {
  requestName: REQUEST_NAMES,
  status: REQUEST_STATUS
}
export const EventProvider: FC<IEventProviderProps> = ({
                                                         children: {props},
                                                       }: IEventProviderProps) => {
  const [eventsList, setEvents] = useState<IEvent[]>([]);
  const [event, setEvent] = useState<IEvent>(initialEventStateValue);
  const [requestStatus, setStatus] = useState<TRequestStatus>({
    requestName: REQUEST_NAMES.unassigned,
    status: REQUEST_STATUS.unassigned
  })

  const {isLogedIn} = useAuth();
  const {redirectTo} = UseRedirect();

  const setRequestStatus = (payload: TRequestStatus) => setStatus(payload)

  const getEvents = () => {
    eventService.getEvents().then((result) => {
      const {events} = result;
      setEvents(events);
    });
  };

  const getEvent = (eventID: string) => {
    eventService.getEvent(eventID).then((result) => {
      setEvent(result?.data.event);
    });
  };

  const createEvent = (data: any) => {
    eventService
      .createEvent({...data,})
      .then((result) => {
        // TODO show notification bar
      });
  };

  const updateEvent = () => {};
  const deleteEvent = () => {};
  const attendeeEvent = (payload: any, eventID: string) => {
    eventService.attendeeEvent(payload, eventID).then((result) => {
      if (result.statusCode === 200) {
        setRequestStatus({
          requestName: REQUEST_NAMES.attendeeEvent,
          status: REQUEST_STATUS.success
        })
      }
    })
  };

  const redirectToEventRegister = (
    eventID: string,
    callBack: (state: boolean) => {}
  ) => {
    if (isLogedIn) {
      //TODO: should redirect event register page
      return redirectTo(`/register-event/${eventID}`, {state: {eventID}});
    }

    callBack?.(true);
  };

  const redirectToEventInfoPage = (eventID: string) => {
    redirectTo(`event/${eventID}`);
  };

  const tools = useMemo(
    () => ({
      getEvents,
      createEvent,
      updateEvent,
      attendeeEvent,
      deleteEvent,
      eventsList,
      event,
      redirectToEventRegister,
      getEvent,
      redirectToEventInfoPage,
      requestStatus,
      setRequestStatus
    }),
    [getEvents, event, createEvent, updateEvent, attendeeEvent, deleteEvent]
  );

  useEffect(() => {
    getEvents();
  }, []);

  return (
    <EventContext.Provider value={tools}>
      {props?.children}
    </EventContext.Provider>
  );
};
