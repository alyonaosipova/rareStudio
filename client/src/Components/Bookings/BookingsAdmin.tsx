import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../redux/store';
import './styles/Booking.css';
import { loadBooking, confBooking, delBooking } from './bookingSlice';


function BookingAdmin(): JSX.Element {
  
  const dispatch = useAppDispatch();


  useEffect(() => {
    dispatch(loadBooking()).catch(console.log);
  }, []);

 const confirmBooking = (id: number, status: string): void => {
    console.log(id, status, '--------');
    dispatch(confBooking({id, status}))
    .then(() => dispatch(delBooking(id)))
    .catch(console.log);
 }
 

  const booking = useSelector((store: RootState) => store.booking.bookings);


  
  function norm (date: string): string{

    const dateTime = new Date(date);

    const year = dateTime.getFullYear();
    const month = ('0' + (dateTime.getMonth() + 1)).slice(-2);
    const day = ('0' + dateTime.getDate()).slice(-2);
    const time =
      ('0' + dateTime.getHours()).slice(-2) + ':' + ('0' + dateTime.getMinutes()).slice(-2);

    const formattedDate = `${year}-${month}-${day}/\n${time}`;
    return formattedDate;
  }

  return (

    <div className="tableContainer">
      <table className="tableAdmin">
        <thead>
          <tr>
            <th>Пользователь</th>
            <th>Название услуги</th>
            <th>Время брони</th>
            <th>Действия</th>
          </tr>
        </thead>
        <tbody>
          {booking?.map((book) => (
            <tr key={book.id}>
              <td> {book?.User?.name}</td>
              <td>{book?.Service?.title}</td>
              <td>{norm(book.startDate)}</td>
              <td>
               <button className='delete_booking' type='button' onClick={()=>confirmBooking(book?.id, 'confirmed')}>одобрить</button>
                <button className='delete_booking' type='button'onClick={()=>confirmBooking(book?.id, 'rejected')} >отклонить</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
}

export default BookingAdmin;
