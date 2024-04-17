/* eslint-disable @typescript-eslint/explicit-function-return-type */
import axios, { type AxiosResponse } from 'axios';
import type { UserUpForm, User, UserInForm } from './types/user'


// eslint-disable-next-line import/prefer-default-export
export const signUpFetch = async(obj: UserUpForm): Promise<User> => {
    const response: AxiosResponse<{message: string, user: User}> = await axios.post(`/api/auth/sign-up`, obj)
    return response.data.user
} 

export const checkFetch = async (): Promise<User>  => {
    const res: AxiosResponse<{message: string, user: User}> = await axios.get(`/api/auth/check`)
    console.log(res.data, 'api');
    return res.data
}

export const logFetch = async(obj: UserInForm): Promise<User> => {
    const res: AxiosResponse<{message: string, user: User}> = await axios.post(`/api/auth/sign-in`, obj)
 
    
    return res.data.user
}

export const logOutFetch = async (): Promise<User>  => {
    const res: AxiosResponse<{message: string, user: User}> = await axios.get(`/api/auth/logout`)   
    return res.data
}