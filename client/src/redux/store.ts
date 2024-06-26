// импорт устаревшего метода legacy_createStore + переименование
import { useDispatch, useSelector, type TypedUseSelectorHook } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import userSlice from '../Components/Auth/AuthSlice';
import serviceSlice from '../Components/Services/serviceSlice';
import bookingSlice from '../Components/Bookings/bookingSlice';
// Слайсы - это отдельные модули нашего приложения. У каждого слайса - свой редьюсер.

const store = configureStore({
  // теперь функция combineReducers не нужна
  reducer: {
    user: userSlice,
    services: serviceSlice,
    booking: bookingSlice
  },
});

// для правильной типизации будем использовать useAppDispatch вместо
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

// Типизация и экспорт хуков для работы с store
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
