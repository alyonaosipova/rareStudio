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
  return response.data;
};

export const addBookingFetch = async (obj): Promise => {
  const response: AxiosResponse = await axios.post(`/api/bookings/user/newBooking/`, obj);
  return response.data;
};
