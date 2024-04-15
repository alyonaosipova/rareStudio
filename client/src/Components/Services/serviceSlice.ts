// tasks/tasksSlice.ts
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import * as api from '../../app/api';
// import type { Service, ServiceType } from './types/servicesType';

const initialState: ServiceType = {
  services: [],
};

export const loadServices = createAsyncThunk('services/loadServices', () =>
  api.loadServicesFetch(),
);
// export const addTasks = createAsyncThunk('services/addServices', (service: Service) =>
//   api.loadServicesFetch(service),
// );

const serviceSlice = createSlice({
  name: 'services',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // показываем как меняется state если загрузка прошла успешно
      .addCase(loadServices.fulfilled, (state, action) => {
        // здесь можно мутировать state
        // RTK создаст копию state автоматически
        state.services = action.payload;
      })
      .addCase(loadServices.rejected, (state, action) => {
        // показываем как меняется state если загрузка не прошла
        state.error = action.error.message;
      })
      .addCase(loadServices.pending, (state, action) => {
        // показываем как меняется state если загрузка не прошла
        //// loader
      });
  },
});

export default serviceSlice.reducer;
