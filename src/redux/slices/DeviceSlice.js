import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import AxiosInstance from '../../services/utils/axios';

export const getAccessPoints = createAsyncThunk('getAccessPoints', async () => {
  const response = await AxiosInstance.get('device/categories');
  return response?.data;
});

export const getDeviceList = createAsyncThunk(
  'getDeviceList',
  async ({ page, size }, { rejectWithValue }) => {
    try {
      const response = await AxiosInstance.get('device/all', { params: { page, size } });
      return response?.data;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  },
);

export const deviceSlice = createSlice({
  name: 'getDevices',

  initialState: {
    loading: false,
    error: false,
    response: null,
  },
  reducers: {},
  extraReducers: {
    // Get otp
    [getAccessPoints.fulfilled]: (state, action) => {
      state.loading = false;
      state.response = action.payload;
    },
    [getAccessPoints.pending]: (state, action) => {
      state.loading = true;
    },
    [getAccessPoints.rejected]: (state, action) => {
      state.loading = false;
      state.error = true;
    },

    [getDeviceList.fulfilled]: (state, action) => {
      state.loading = false;
      state.response = action.payload;
    },
    [getDeviceList.pending]: (state, action) => {
      state.loading = true;
    },
    [getDeviceList.rejected]: (state, action) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export default deviceSlice.reducer;
