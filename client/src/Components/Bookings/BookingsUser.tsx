import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../redux/store';
import { delBooking, loadBooking, loadBookingUser } from './bookingSlice';
import './styles/Booking.css'
import { IdBooking } from './types/bookingsType';
function BookingUser(): JSX.Element {
  // const[status, setStatus] = useState()
  //    const user = useSelector((store: RootState) => store.user.user)
  const bookings = useAppDispatch();
  useEffect(() => {
    bookings(loadBookingUser()).catch(console.log);
  }, []);



  const booking = useSelector((store: RootState) => store.booking.bookings);
  // console.log(booking, '111111');

  const deleteBooking = (id:IdBooking): void => {
    
    bookings(delBooking(id)).catch(console.log);
  };

  function norm (date: string): string{
    const dateTime = new Date(date);

    const year = dateTime.getFullYear();
    const month = ('0' + (dateTime.getMonth() + 1)).slice(-2); 
    const day = ('0' + dateTime.getDate()).slice(-2);
    const time = ('0' + dateTime.getHours()).slice(-2) + ':' + ('0' + dateTime.getMinutes()).slice(-2);
    
    const formattedDate = `${year}-${month}-${day}/\n${time}`;
    return formattedDate
  }
  return (
    <div>
      {booking?.map((book) => (
        <div className='booking_mapped' key={book.id}>
          НАИМЕНОВАНИЕ УСЛУГИ: 
          {book.Service.title}
          <br />
          {`ВРЕМЯ БРОНИ: ${norm(book.startDate)}`}
          <div>
            <button onClick={()=> deleteBooking(book.id)} className='delete_booking' type='button'>удалить</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BookingUser;