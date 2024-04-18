/* eslint-disable @typescript-eslint/explicit-function-return-type */
import axios, { type AxiosResponse } from 'axios';
import type { UserUpForm, User, UserInForm } from './types/user';

type AxiosError = {
  response: {
    data: {
      message: string;
    };
  };
} & Error;

// eslint-disable-next-line import/prefer-default-export
export const signUpFetch = async (obj: UserUpForm): Promise<User> => {
  try {
    const response: AxiosResponse<{ message: string; user: User }> = await axios.post(
      `/api/auth/sign-up`,
      obj,
    );
    return response.data.user;
  } catch (error) {
    const axiosError = error as AxiosError;
    throw new Error(axiosError.response.data.message);
  }
};

export const checkFetch = async (): Promise<User> => {
  try {
    const res: AxiosResponse<{ message: string; user: User }> = await axios.get(`/api/auth/check`);
    //   console.log(res.data.user, 'api');
    return res.data.user;
  } catch (error) {
    const axiosError = error as AxiosError;
    throw new Error(axiosError.response.data.message);
  }
};

export const logFetch = async (obj: UserInForm): Promise<User> => {
  try {
    const res: AxiosResponse<{ message: string; user: User }> = await axios.post(
      `/api/auth/sign-in`,
      obj,
    );

    return res.data.user;
  } catch (error) {
    const axiosError = error as AxiosError;
    throw new Error(axiosError.response.data.message);
  }
};

export const logOutFetch = async (): Promise<string> => {
  try {
    const res: AxiosResponse<{ message: string }> = await axios.get(`/api/auth/logout`);
    return res.data.message;
  } catch (error) {
    const axiosError = error as AxiosError;
    throw new Error(axiosError.response.data.message);
  }
};
