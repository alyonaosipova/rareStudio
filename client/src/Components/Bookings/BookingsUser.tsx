import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../redux/store';
import {loadBooking} from './bookingSlice'

function BookingUser():JSX.Element{
   // const[status, setStatus] = useState()
    const bookings = useAppDispatch()
    useEffect(() =>{
        bookings(loadBooking())
    },[])
   


    const booking = useSelector((store:RootState)=>(store.booking.bookings))
    console.log(booking);
    
    return(
        <div>
            {booking.map((book)=>(<div key={book.id}>{book.status}</div>))}
        </div>
    )

}

export default BookingUser