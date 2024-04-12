import axios, { type AxiosResponse } from 'axios';
import type { UserUpForm, User } from './types/user'


// eslint-disable-next-line import/prefer-default-export
export const signUpFetch = async(obj: UserUpForm): Promise<User> => {
    const response: AxiosResponse<{message: string, user: User}> = await axios.post(`/api/sign/up`, obj)
    return response.data.user
} 