import { baseURL } from '../../configs';
import { HttpClient } from '../http-request';

class EventService extends HttpClient {
  public constructor() {
    super(baseURL);
  }

  public async getEvents() {
    return await this.instance.get('');
  }

  public createEvent(payload: any) {
    return this.instance.post('');
  }

  public updateEvent(payload: any) {
    return this.instance.put('');
  }

  public deleteEvent(payload: any) {
    return this.instance.delete('');
  }

  public attendeEvent() {
    return this.instance.post('');
  }
}

export const eventService = new EventService();
