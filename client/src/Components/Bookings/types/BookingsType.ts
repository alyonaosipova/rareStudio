export type Booking = {
    id?:number,
    userId: number,
    serviceId: string,
    status: string
}

export type BookingType = {
    bookings: Booking[];
    message: string | undefined;
  };

export type IdBooking = {
    id:number
}