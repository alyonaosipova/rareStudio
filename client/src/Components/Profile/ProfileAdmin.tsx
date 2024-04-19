import React from 'react';
import BookingAdmin from '../Bookings/BookingsAdmin';

function ProfileAdmin(): JSX.Element {
  return (
    <>
      <div className="helloAdmin">Привет, Админ!</div>
      <BookingAdmin />
    </>
  );
}

export default ProfileAdmin;
