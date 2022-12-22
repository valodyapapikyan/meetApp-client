import React, {
  createContext,
  FC,
  useContext,
  useMemo,
  useState,
  useEffect,
} from 'react';
import moment from "moment";
import {
  IEvent,
  IEventContextType,
  IEventProviderProps,
} from '../../types';
import {eventService} from '../../services/event-service/index';
import {useNavigate} from 'react-router-dom';
import useAuth from '../../hooks/use-auth/index';
import {UseRedirect} from "../../hooks/use-redirect";

export const EventContext = createContext<IEventContextType>({} as IEventContextType);

export const EventProvider: FC<IEventProviderProps> = ({
                                                         children: {props},
                                                       }: IEventProviderProps) => {
  const [eventsList, setEvents] = useState<IEvent[]>([]);
  const {isLogedIn} = useAuth();
  const {redirectTo} = UseRedirect();

  const getEvents = () => {
    eventService.getEvents().then((result) => {
      const {events} = result;
      setEvents(events);
    });
  };

  const getEvent = (eventID: string) => {
    eventService.getEvent(eventID).then((result) => {
      console.log(result)
    })
  }


  const createEvent = () => {

    const dummyData = {
      // eventID,
      name: `name -${Math.floor(Math.random() * 100)}`,
      date: moment().format(moment.HTML5_FMT.DATE),
      time: moment("2015-01-16T12:00:00").format("hh:mm:ss a"),
      location: 'Yerevan',
      eventType: 'se',
      description: 'gdhsgshgshgdshgsdhsghsghsgdshgdshgdshdgshdgshdsgdhsgshdgsdhsgdhgshgs',
      gudelinnes: 'ghdsghsgh',
      hasTimeFrame: true,
      timeFrame: '15',
      speaker: {
        speakerFullName: 'Valodya',
        topic: 'engineering',
        speakerCompany: 'AmeriaBank',
      }

    }
    eventService.createEvent(dummyData).then((result) => {
      console.log(result)
    })
  };
  const updateEvent = () => {
  };
  const deleteEvent = () => {
  };
  const attendeEvent = () => {
  };

  const redirectToEventRegister = (eventID: string, callBack: (state: boolean) => ({})) => {
    if (isLogedIn) {
      //TODO: should redirect event register page
      return redirectTo(`/register-event/${eventID}`, {state: {eventID}});
    }

    callBack?.(true)
  };

  const redirectToEventInfoPage = (eventID: string) => {
    redirectTo(`event/${eventID}`)
  }

  const tools = useMemo(
    () => ({
      getEvents,
      createEvent,
      updateEvent,
      attendeEvent,
      deleteEvent,
      eventsList,
      redirectToEventRegister,
      getEvent,
      redirectToEventInfoPage
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
