import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from './apiBookings';
import { Booking, BookingType, IdBooking } from './types/bookingsType';

const initialState: BookingType = {
  bookings: [],
  message: '',
};

export const loadBooking = createAsyncThunk('booking/load', () => api.loadBookingsUserFetch());

export const delBooking = createAsyncThunk('booking/delete', (id: IdBooking) =>
  api.delBookingUserFetch(+id),
);

export const addBooking = createAsyncThunk('booking/add', (obj) => api.addBookingFetch(obj));

const bookingSlice = createSlice({
  name: 'bookings',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadBooking.fulfilled, (state, action) => {
        state.bookings = action.payload;
      })
      .addCase(loadBooking.rejected, (state, action) => {
        state.message = action.error.message;
      })
      .addCase(delBooking.fulfilled, (state, action) => {
        state.bookings = state.bookings.filter((item) => item.id !== action.payload.id);
      })
      .addCase(addBooking.fulfilled, (state, action) => {
        state.bookings.push(action.payload);
      })
      .addCase(addBooking.rejected, (state, action) => {
        state.message = action.error.message;
      });
  },
});

export default bookingSlice.reducer;
