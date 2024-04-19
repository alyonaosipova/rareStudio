import React, { useEffect, useState } from 'react';
import BookingUser from '../Bookings/BookingsUser';
import { RootState, useAppDispatch, useAppSelector } from '../../redux/store';
import { useSelector } from 'react-redux';
import { loadProfile } from './profileSlice';

function ProfileUser(): JSX.Element {
  const user = useAppSelector((store: RootState) => store.user.user);

  return (
    <div>
      <div className="helloUser">Привет, {user?.name}</div>
      <BookingUser />
    </div>
  );
}

export default ProfileUser;
