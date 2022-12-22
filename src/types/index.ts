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
  createEvent: () => void;
  deleteEvent: () => void;
  updateEvent: () => void;
  attendeEvent: () => void;
  redirectToEventRegister: (eventID: string, callBack: (state: boolean) => any) => any;
  redirectToEventInfoPage: (eventID: string) => void;
  eventsList: IEvent[];
};

export type IEvent = {
  dateTime: string;
  description: string;
  eventID: string;
  gudelinnes: string;
  location: string;
  name: string;
};

export type IEvents = {
  events: [IEvent];
};

export type IObj = { [key: string]: any };
