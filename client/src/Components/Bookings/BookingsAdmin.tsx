import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../redux/store';
import { loadBooking } from './bookingSlice';

function BookingAdmin(): JSX.Element {
  // const[status, setStatus] = useState()
  const bookings = useAppDispatch();

  useEffect(() => {
    bookings(loadBooking()).catch(console.log);
  }, []);

  const booking = useSelector((store: RootState) => store.booking.bookings);
  console.log(booking);

  return (
    <div>
      {booking.map((book) => (
        <div key={book.id}>
          {book.serviceId}
          {book.startDate}
        </div>
      ))}
    </div>
  );
}

export default BookingAdmin;
