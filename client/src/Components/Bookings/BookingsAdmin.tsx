import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../redux/store';
import { loadBooking, confBooking, delBooking } from './bookingSlice';

function BookingAdmin(): JSX.Element {
  // const[status, setStatus] = useState()
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadBooking()).catch(console.log);
  }, []);


 const confirmBooking = (id: number, status: string): void => {
    dispatch(confBooking({id, status})).catch(console.log);
    dispatch(delBooking(id)).catch(console.log);

 }
 
  const booking = useSelector((store: RootState) => store.booking.bookings);

  console.log(booking);
  
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
          {book?.Service?.title}
          <br />
            ИМЯ ЮЗЕРА:
            {book?.User?.name}
          
          <br />
          {`ВРЕМЯ БРОНИ: ${norm(book.startDate)}`}
          <div>
            <button className='delete_booking' type='button' onClick={()=>confirmBooking(book.id, 'confirmed')}>одобрить</button>
            <button className='delete_booking' type='button'onClick={()=>confirmBooking(book.id, 'rejected')} >отклонить</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BookingAdmin;