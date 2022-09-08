import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import Api from '../../services/api'
import AxiosInstance from '../../services/utils/axios';

export const getAccessPoints = createAsyncThunk(
  'getAccessPoints',
  async () => {
    const response = await AxiosInstance.get('device/categories');
    return response?.data;
  },
);

export const getDevicesAtRiskList = createAsyncThunk(
  'getDevicesAtRiskList',
  async (data, { rejectWithValue }) => {
    try {
      const response = await AxiosInstance.post(`device/type/${data.type}`, { page: data.page });
      return response?.data;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  },
);

export const getDevicesAtRiskFull = createAsyncThunk(
  'getDevicesAtRiskFull',
  async (data, { rejectWithValue }) => {
    try {
      const response = await AxiosInstance.get('device/risk/all');
      return response?.data;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  },
);

export const deviceAtRiskSlice = createSlice({
  name: 'getDevicesAtRisk',

  initialState: {
    loading: false,
    error: false,
    response: null,
    score: 0,
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

    [getDevicesAtRiskList.fulfilled]: (state, action) => {
      state.loading = false;
      state.response = action.payload;
    },
    [getDevicesAtRiskList.pending]: (state, action) => {
      state.loading = true;
    },
    [getDevicesAtRiskList.rejected]: (state, action) => {
      state.loading = false;
      state.error = true;
    },

    [getDevicesAtRiskFull.fulfilled]: (state, action) => {
      state.loading = false;
      state.score = action.payload;
    },
    [getDevicesAtRiskFull.pending]: (state, action) => {
      state.loading = true;
    },
    [getDevicesAtRiskFull.rejected]: (state, action) => {
      state.loading = false;
      state.error = true;
    },

  },
});

export default deviceAtRiskSlice.reducer;
