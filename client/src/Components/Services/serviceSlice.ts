// tasks/tasksSlice.ts
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from './apiServices';
import type { IdService, Service, ServiceType } from './types/servicesType';

const initialState: ServiceType = {
  services: [],
  message: '',
};

export const loadServices = createAsyncThunk('services/load', () => api.loadServicesFetch());

export const delService = createAsyncThunk('services/delete', (id: IdService) =>
  api.delServicesFetch(id),
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
      })
      .addCase(delService.fulfilled, (state, action) => {
        state.services = state.services.filter((el) => el.id !== action.payload);
      })
      .addCase(delService.rejected, (state, action) => {
        state.message = action.error.message;
      });
  },
});

export default serviceSlice.reducer;
