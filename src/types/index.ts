export type IAuthProviderProps = {
  children: JSX.Element;
  redirect?: () => void;
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
