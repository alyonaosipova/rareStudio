// tasks/tasksSlice.ts
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from './apiServices';
import type { Service, ServiceType } from './types/servicesType';

const initialState: ServiceType = {
  services: [],
  message: '',
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
        state.message = action.error.message;
      });
  },
});

export default serviceSlice.reducer;
