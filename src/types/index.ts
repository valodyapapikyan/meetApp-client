import {TRequestStatus} from "../contexts/events";

export type IAuthProviderProps = {
  children: JSX.Element;
  redirect?: () => void;
};

export type IEventProviderProps = {
  children: JSX.Element;
};

export type IUser = {
  email: string;
  firstName: string;
  lastName: string;
  profilePicture: string
};

export type IAuthContextType = {
  user?: IUser;
  redirectUrl: string;
  getAccessToken: () => void;
  isLogedIn: boolean;
};

export type IEventContextType = {
  getEvents: () => void;
  getEvent: (eventID:string) => void;
  createEvent: (data: any) => void;
  deleteEvent: () => void;
  updateEvent: () => void;
  attendeeEvent: (payload: { company: string; experience: string; direction: string },eventID:  string,) => void;
  redirectToEventRegister: (eventID: string, callBack: (state: boolean) => any) => any;
  redirectToEventInfoPage: (eventID: string) => void;
  eventsList: IEvent[];
  event: IEvent,
  requestStatus: TRequestStatus,
  setRequestStatus: (payload: TRequestStatus) => void
};

export type IEvent = {
  date: string;
  time: string,
  description:string,
  eventID: string;
  gudelinnes: string;
  location: string;
  name: string;
  image: string
};

export type IEvents = {
  events: [IEvent];
};

export type IObj = { [key: string]: any };

export type IAtendeeEvent = {
  data: any,
  errorMessage: string | null,
  status: string,
  statusCode: number
}
