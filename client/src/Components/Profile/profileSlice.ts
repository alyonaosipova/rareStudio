import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from './apiProfile'
import { IdProfile, ProfileType } from './types/profileTypes';

const initialState: ProfileType = {
    profile: [],
    message: '',
};

export const loadProfile = createAsyncThunk('profile/load', (id:IdProfile)=>{
    api.loadProfileFetch(+id)
})

const profileSlice =createSlice({
    name: 'profile',
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder
        .addCase(loadProfile.fulfilled, (state, action) => {
            state.profile = action.payload
        })
    }
})
export default profileSlice.reducer