/* eslint-disable @typescript-eslint/explicit-function-return-type */
import axios, { type AxiosResponse } from 'axios';
import type { IdService, Service, ServiceAddForm, ServiceType } from './types/servicesType';

// eslint-disable-next-line import/prefer-default-export
export const loadServicesFetch = async (): Promise<Service[]> => {
  const response: AxiosResponse<ServiceType> = await axios.get(`/api/service/admin/services`);
  // console.log(response.data, '0-0-0-0-0');
  return response.data.services;
};

export const delServicesFetch = async (id: number): Promise<IdService> => {
  
  const response: AxiosResponse<IdService> = await axios.delete(
    `/api/service/admin/delServices/${id}`,
  );
  return response.data;
};

export const addServicesFetch = async (obj: ServiceAddForm): Promise<Service> => {
  const response: AxiosResponse<{ message: string; service: Service }> = await axios.post(
    `/api/service/admin/newServices`,
    obj,
  );

  return response.data.service;
};

export const updServicesFetch = async (obj: Service): Promise<Service> => {
  console.log("obj", obj);
  
  const response: AxiosResponse<{ message: string; service: Service }> = await axios.put(
    `/api/service/admin/services/${obj.id}`,
    obj,
  );

  return response.data.service;
};
