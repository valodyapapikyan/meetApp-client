import React, {
  createContext,
  FC,
  useContext,
  useMemo,
  useState,
  useEffect,
} from 'react';
import {
  IEvent,
  IEventContextType,
  IEventProviderProps,
} from '../../types';
import { eventService } from '../../services/event-service/index';
import { useNavigate } from 'react-router-dom';
import useAuth from '../use-auth/index';

const EventContext = createContext<IEventContextType>({} as IEventContextType);

export const EventProvider: FC<IEventProviderProps> = ({
  children: { props },
}: IEventProviderProps) => {
  const [eventsList, setEvents] = useState<IEvent[]>([]);
  const {isLogedIn} = useAuth();
  const navigate = useNavigate();

  const getEvents = () => {
    eventService.getEvents().then((result) => {
      const { events } = result;
      setEvents(events);
    });
  };

  const createEvent = () => {};
  const updateEvent = () => {};
  const deleteEvent = () => {};
  const attendeEvent = () => {};

  const redirectTo = (eventID: string, callBack: (state: boolean) => ({})) => {
    if (isLogedIn) {
      //TODO: should redirect event register page
      return navigate(`/register-event/${eventID}`, { state: { eventID } });
    }

    callBack?.(true)
  };

  const tools = useMemo(
    () => ({
      getEvents,
      createEvent,
      updateEvent,
      attendeEvent,
      deleteEvent,
      eventsList,
      redirectTo
    }),
    [getEvents, createEvent, updateEvent, attendeEvent, deleteEvent]
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

export default function useEvents() {
  return useContext(EventContext);
}
