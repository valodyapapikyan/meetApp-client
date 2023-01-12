export const baseURL = `http://localhost:2020/`;
export const REDIRECT_URL = `http://localhost:3000/auth/authorize/linkedin`;
export const REDIRECT_URL_ACCESS_TOKEN = `http://localhost:2020/linkedin/authorize/url?redirectUrl=${REDIRECT_URL}`;
export const AUTHORIZE_URL = `http://localhost:2020/linkedin/authorize`;
export const USER_PROFILE = `http://localhost:2020/user`;

export const endpoints = {
  get: `events`,
  getEvent: `event`,
  remove: `events`,
  update: `events`,
  create: `events/create`,
  attendee: `events/attendee`,
  getuserevents: `events/user-events`,
};
