import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  message: '',
  isLoaded: false,
  loading: false,
};

const URL = '/api/v1/greetings';
/* eslint-disable import/prefer-default-export */
export const getGreetingsData = createAsyncThunk('greetings/get', async (arg, { rejectWithValue }) => {
  try {
    const response = await axios.get(URL);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const greetingsMessages = createSlice({
  name: 'greetings',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getGreetingsData.pending, (state) => {
        state.loading = true;
      })
      .addCase(getGreetingsData.fulfilled, (state, action) => {
        state.loading = false;
        state.isLoaded = true;
        state.message = action.payload;
      })
      .addCase(getGreetingsData.rejected, (state, action) => {
        state.message = action.payload;
        state.loading = false;
        state.isLoaded = false;
      });
  },
});

export default greetingsMessages.reducer;
