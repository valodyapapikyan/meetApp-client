import {
  AUTHORIZE_URL,
  baseURL,
  REDIRECT_URL_ACCESS_TOKEN,
} from '../../configs';
import { HttpClient } from 'dino_ui_tools';
import { USER_PROFILE } from '../../configs/index';

class UserService extends HttpClient {
  public constructor() {
    super(baseURL);
  }

  public async authorize() {
    return await this.instance.get(REDIRECT_URL_ACCESS_TOKEN);
  }

  public getAccessToken(payload: any) {
    return this.instance.post(AUTHORIZE_URL, payload);
  }

  public getUserProfile() {
    return this.instance.get(USER_PROFILE);
  }
}

export const userService = new UserService();
