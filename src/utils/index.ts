import { IObj } from "../types";


export  const isKeysExist = (target: {[key: string]: any} | null) => {
  return target && Object.keys(target).length
}

export const normilizeData = <T extends object>(payload: T): T => {
  const { data }: IObj = payload;
  return data;
};
