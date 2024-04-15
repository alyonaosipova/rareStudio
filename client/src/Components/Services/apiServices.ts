/* eslint-disable @typescript-eslint/explicit-function-return-type */
import axios, { type AxiosResponse } from 'axios';
import { Service, ServiceType } from './types/servicesType';

// eslint-disable-next-line import/prefer-default-export
export const loadServicesFetch = async (): Promise<Service[]> => {
  const response: AxiosResponse<ServiceType> = await axios.get(`/api/service/admin/services`);
  console.log(response.data, '0-0-0-0-0');
  return response.data;
};

// export const logFetch = async (obj: UserInForm): Promise<User> => {
//   const res: AxiosResponse<{ message: string; user: User }> = await axios.post(`/api/sign/in`, obj);
//   return res.data.user;
// };
