import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import './style/booking.css';
import 'react-datepicker/dist/react-datepicker.css';

interface BookingTimePickerProps {
  selectedDate: Date;
  onTimeChange: (time: Date) => void;
}

function BookingTimePicker({ selectedDate, onTimeChange }: BookingTimePickerProps): JSX.Element {
  const [selectedTime, setSelectedTime] = useState<Date>(new Date());

  // console.log(selectedTime);

  const handleTimeChange = (time: Date): void => {
    setSelectedTime(time);
    onTimeChange(time); // Передаем выбранное время в родительский компонент
  };

  return (
    <DatePicker
      selected={selectedTime}
      onChange={handleTimeChange}
      onSelect={() => console.log('hhhh')}
      showTimeSelect
      inline
      timeIntervals={60}
      dateFormat="dd/MM/yyyy"
      style={{ width: '100%' }}
    />
  );
}

export default BookingTimePicker;
