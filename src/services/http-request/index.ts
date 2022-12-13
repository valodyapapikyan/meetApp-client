import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { Storage } from '../../helpers/storage-manager';
import { accessTokenKey } from '../../constants/index';

declare module 'axios' {
  interface AxiosResponse<T = any> extends Promise<T> {}
}

export abstract class HttpClient {
  protected readonly instance: AxiosInstance;

  public constructor(baseURL: string) {
    this.instance = axios.create({
      baseURL,
    });

    this.initializeResponseInterceptor();
  }

  private initializeResponseInterceptor(): void {
    this.instance.interceptors.response.use(
      this.handleResponse,
      this.handleError
    );

    this.instance.interceptors.request.use(this.handleRequest);
  }

  private async handleRequest(config: AxiosRequestConfig) {
    config.headers = config.headers ?? {};

    const token = await Storage.getItem(accessTokenKey);

    config.headers['Authorization'] = `Bearer ${token}`;

    return config;
  }

  private handleResponse({ data }: AxiosResponse) {
    return data;
  }

  protected handleError(error: any) {
    Promise.reject(error);
  }
}
