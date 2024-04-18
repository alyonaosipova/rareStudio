// tasks/tasksSlice.ts
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { UserInForm, UserLoad, UserUpForm } from './types/user';
import * as api from './apiAuth';

const initialState: UserLoad = {
  user: undefined,
  message: '',
};

export const authRegistration = createAsyncThunk('user/signup', (obj: UserUpForm) =>
  api.signUpFetch(obj),
);
export const authCheck = createAsyncThunk('auth/check', () => api.checkFetch());
export const authLogin = createAsyncThunk('user/signin', (obj: UserInForm) => api.logFetch(obj));
export const authLogout = createAsyncThunk('auth/logout', () => api.logOutFetch());

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // показываем как меняется state если загрузка прошла успешно
      .addCase(authRegistration.fulfilled, (state, action) => {
        // здесь можно мутировать state
        // RTK создаст копию state автоматически
        state.user = action.payload;
        // console.log(state.user);
      })
      .addCase(authRegistration.rejected, (state, action) => {
        // показываем как меняется state если загрузка не прошла
        state.message = action.error.message;
      })
      .addCase(authCheck.fulfilled, (state, action) => {
        // здесь можно мутировать state
        // RTK создаст копию state автоматически
        // console.log(action.payload, 'slice');

        state.user = action.payload;
      })
      .addCase(authCheck.rejected, (state, action) => {
        // показываем как меняется state если загрузка не прошла
        state.message = action.error.message;
      })
      .addCase(authLogin.fulfilled, (state, action) => {
        state.user = action.payload;
        state.message = '';
      })
      .addCase(authLogin.rejected, (state, action) => {
        state.message = action.error.message;
      })
      .addCase(authLogout.fulfilled, (state) => {
        state.user = undefined;
        // state.message = ''
      });
    //   .addCase(authLogout.rejected, (state, action) => {
    //     state.message = action.error.message
    //   })
  },
});

export default userSlice.reducer;
