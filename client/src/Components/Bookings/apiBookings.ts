import axios, { type AxiosResponse } from 'axios';
import { Booking, BookingType, IdBooking } from './types/bookingsType';

export const loadBookingsUserFetch = async (): Promise<Booking[]> => {
  const response: AxiosResponse<BookingType> = await axios.get('/api/bookings/user/bookings');
  console.log(response.data.bookings, '-------');

  return response.data.bookings;
};

export const loadBookingsAdminFetch = async (): Promise<Booking[]> => {
  const response: AxiosResponse<BookingType> = await axios.get('/api/bookings/admin/booking');
  return response.data.bookings;
};
// export const addBookngsUserFetch = async (): Promise<

export const delBookingUserFetch = async (id: number): Promise<IdBooking> => {
  const response: AxiosResponse<IdBooking> = await axios.delete(
    `/api/bookings/user/delBooking/${id}`,
  );
  console.log(response.data);
  
  return response.data;
};

export const addBookingFetch = async (obj:Booking): Promise<Booking> => {
  const response: AxiosResponse<Booking> = await axios.post(`/api/bookings/user/newBooking/`, obj);
  return response.data;
};

export const confBookingFetch = async (obj :{id: number, status:string}): Promise<Booking> =>{
    console.log(obj);
    
  const response: AxiosResponse<Booking> = await axios.put(`/api/bookings/admin/booking/${obj.id}`, {status:obj.status});
  return response.data
}

export const rejBookingFetch = async ( id: number, status:string): Promise<Booking> =>{
  const response: AxiosResponse<Booking> = await axios.put(`/api/bookings/admin/booking/${id}`, status);
  return response.data
}

