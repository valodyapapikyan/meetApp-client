import { IObj } from "../types";
import {REQUEST_NAMES, REQUEST_STATUS} from "../enums";


export  const isKeysExist = (target: {[key: string]: any} | null) => {
  return target && Object.keys(target).length
}

export const normilizeData = <T extends object>(payload: T, ): T => {
  const { data }: IObj = payload;
  return data;
};

export const unAssignRequestStatus = () => ({requestName: REQUEST_NAMES.unassigned, status: REQUEST_STATUS.unassigned})
