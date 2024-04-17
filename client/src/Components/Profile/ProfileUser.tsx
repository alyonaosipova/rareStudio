import React, { useEffect, useState } from 'react';
import BookingUser from '../Bookings/BookingsUser';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { useSelector } from 'react-redux';
import { RootState } from '@reduxjs/toolkit/query';
import { loadProfile } from './profileSlice';

function ProfileUser():JSX.Element{
    
    const profileInfo = useAppDispatch()
    const users = useSelector((store: RootState) => store.user.user)
    console.log(users,"11111");
    useEffect(() => {
        profileInfo(loadProfile(users.id))
    },[])
   
    return(
        <div>
        <div>USER</div>
        <BookingUser/>
        </div>
    )

}

export default ProfileUser