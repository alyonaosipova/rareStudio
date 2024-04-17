import axios, { type AxiosResponse } from 'axios';
import { IdProfile, Profile, ProfileType } from './types/profileTypes';

export const loadProfileFetch = async (id:number):Promise<Profile>=> {
    
    const response: AxiosResponse<Profile> = await axios.get(`/api/profile/user/info/${id}`)
    return response.data

}


// export const updateProfileFetch = async (obj: )