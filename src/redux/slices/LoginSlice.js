import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import AxiosInstance from '../../services/utils/axios';

const initialState = {
  loading: false,
  error: false,
  message: '',
  response: null,
};
export const sendEmailOTP = createAsyncThunk('sendEmailOTP', async (data, { rejectWithValue }) => {
  try {
    const response = await AxiosInstance.post('auth/send-otp', data);
    return response?.data;
  } catch (err) {
    if (!err.response) throw err;
    rejectWithValue(err.response.data);
  }
});

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(sendEmailOTP.rejected, (state, action) => {
      state.loading = false;
      state.error = true;
      state.response = action.payload;
    });
    builder.addCase(sendEmailOTP.fulfilled, (state, action) => {
      state.loading = false;
      state.response = action.payload;
    });
    builder.addCase(sendEmailOTP.pending, (state) => {
      state.loading = true;
      state.message = '';
      state.error = false;
      state.response = null;
    });
  },
});

export const loginReducer = loginSlice.reducer;
