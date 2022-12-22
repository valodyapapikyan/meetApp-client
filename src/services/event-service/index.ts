import { baseURL } from '../../configs';
import { HttpClient } from '../http-request';
import { endpoints } from '../../configs/index';
import { IEvents } from '../../types';
import { normilizeData } from '../../utils';

class EventService extends HttpClient {
  public constructor() {
    super(baseURL);
  }

  public async getEvents(): Promise<IEvents> {
    const data = await this.instance.get(endpoints.get);
    return normilizeData(data);
  }

  public createEvent(payload: any) {
    return this.instance.post(endpoints.create,payload);
  }

  public getEvent(eventID: string) {
    return this.instance.get(`${endpoints.getEvent}/${eventID}`);
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
