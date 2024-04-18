import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../redux/store';
import { loadBooking, loadBookingUser } from './bookingSlice';

function BookingUser(): JSX.Element {
  // const[status, setStatus] = useState()
  //    const user = useSelector((store: RootState) => store.user.user)
  const bookings = useAppDispatch();
  useEffect(() => {
    bookings(loadBookingUser()).catch(console.log);
  }, []);

  const booking = useSelector((store: RootState) => store.booking.bookings);
  console.log(booking, '111111');

  return (
    <div>
      {booking?.map((book) => (
        <div key={book.id}>
          {book.serviceId}
          {book.startDate}
        </div>
      ))}
    </div>
  );
}

export default BookingUser;
