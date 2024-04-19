export type Booking = {
  id: number;
  userId: number;
  serviceId: string;
  status: string;
  startDate: string;
  Service:{title:string};
  User:{name:string}
};

export type BookingType = {
  bookings: Booking[];
  message: string | undefined;
};

export type IdBooking = {
  id: number;
};
