// tasks/tasksSlice.ts
import {
    createAsyncThunk,
    createSlice,
} from '@reduxjs/toolkit';
import  type { UserLoad, UserUpForm } from './types/user';
import * as api from './apiAuth'

const initialState: UserLoad = {
    user: null,
    error: undefined,
};

export const authRegistration = createAsyncThunk('user/signup', (obj:UserUpForm)=> api.signUpFetch(obj))

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
                console.log(state.user);
            })
            .addCase(authRegistration.rejected, (state, action) => {
                // показываем как меняется state если загрузка не прошла
                state.error = action.error.message;
            })
    },
});

export default userSlice.reducer;