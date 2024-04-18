import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import BookingTimePicker from './Booking';
import { useAppSelector, type RootState, useAppDispatch } from '../../redux/store';
import { loadServices } from '../Services/serviceSlice';

const modalStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Прозрачный цвет фона
    zIndex: 1000, // Поверх всех элементов
    display: 'flex',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
};

function ModalWindow(): JSX.Element {
  const [selectedTime, setSelectedTime] = useState<Date | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useAppDispatch();

  const services = useAppSelector((store: RootState) => store.services.services);
  console.log(services);

  useEffect(() => {
    dispatch(loadServices()).catch(console.log);
  }, []);

  console.log(services, 'services');

  const [selectedService, setSelectedService] = useState('');

  const handleServiceChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    setSelectedService(e.target.value);
  };

  const handleTimeChange = (time: Date): void => {
    setSelectedTime(time);
  };

  const openModal = (): void => {
    setIsModalOpen(true);
  };

  const closeModal = (): void => {
    setIsModalOpen(false);
  };

  return (
    <>
      <button type="button" onClick={openModal}>
        Забронировать
      </button>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        style={modalStyles}
        contentLabel="Booking Time Modal"
        shouldCloseOnOverlayClick
      >
        <div className="insideModal">
          <BookingTimePicker selectedDate={selectedTime} onTimeChange={handleTimeChange} />
          <select value={selectedService} onChange={handleServiceChange}>
            {services.map((el) => (
              <option key={el.id} value={el.id}>
                {el.title}
              </option>
            ))}
          </select>
          <button
            className="bookButton"
            type="button"
            style={{ margin: '20px auto', display: 'block' }}
          >
            Выбрать
          </button>
        </div>
      </Modal>
    </>
  );
}

export default ModalWindow;
