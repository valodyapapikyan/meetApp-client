import React, { FC, useState, createContext, useMemo } from 'react';
import { eventService } from '../../services/event-service';

type IFormDataProviderContext = {
  setFormData: (data: any) => void;
  submitForm: () => void;
  data: any;
};

type IFormDataProviderProps = {
  children: JSX.Element;
};

export const FormDataContext = createContext<IFormDataProviderContext>(
  {} as IFormDataProviderContext
);

export const FormDataProvider: FC<IFormDataProviderProps> = (
  props: IFormDataProviderProps
) => {
  const [data, setData] = useState<{}>({});

  const setFormData = (data: any) => {
    setData((previousState) => ({ ...previousState, ...data }));
  };

  const submitForm = () => {
    eventService.createEvent(data);
  };

  const fromDataTools = useMemo(
    () => ({
      setFormData,
      data,
      submitForm,
    }),
    [setData, data]
  );

  return (
    <FormDataContext.Provider value={fromDataTools}>
      {props?.children}
    </FormDataContext.Provider>
  );
};
