// tasks/tasksSlice.ts
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from './apiServices';
import type { IdService, Service, ServiceAddForm, ServiceType } from './types/servicesType';

const initialState: ServiceType = {
  services: [],
  message: '',
};

export const loadServices = createAsyncThunk('services/load', () => api.loadServicesFetch());

export const delService = createAsyncThunk('services/delete', (id: IdService) =>
  api.delServicesFetch(+id),
);

export const addService = createAsyncThunk('services/add', (service: ServiceAddForm) =>
  api.addServicesFetch(service),
);

export const updService = createAsyncThunk('services/upd', (service: Service) =>
  api.updServicesFetch(service),
);

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
        state.services = state.services.filter((el) => el.id !== action.payload.id);
      })
      .addCase(delService.rejected, (state, action) => {
        state.message = action.error.message;
      })
      .addCase(addService.fulfilled, (state, action) => {
        // здесь можно мутировать state
        // RTK создаст копию state автоматически
        state.services.push(action.payload);
      })
      .addCase(addService.rejected, (state, action) => {
        // показываем как меняется state если загрузка не прошла
        state.message = action.error.message;
      })
      .addCase(updService.fulfilled, (state, action) => {
        const updatedService = action.payload;

        const index = state.services.findIndex((service) => service.id === updatedService.id);
        if (index !== -1) {
          state.services[index] = updatedService;
        }
      })
      .addCase(updService.rejected, (state, action) => {
        state.message = action.error.message;
      });
  },
});

export default serviceSlice.reducer;
