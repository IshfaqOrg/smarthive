import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import API from '../../constants/RouteConstant/API';
import AxiosInstance from '../../services/utils/axios';

export const getNotification = createAsyncThunk('getNotification', async ({ rejectWithValue }) => {
  try {
    const res = AxiosInstance.get('notification');
    return res;
  } catch (error) {
    if (!error.response) {
      throw error;
    }
    return rejectWithValue(error.response.data);
  }
});

export const makeNotificationSeen = createAsyncThunk('makeNotificationSeen', async (id, { dispatch }, { rejectWithValue }) => {
  try {
    const res = AxiosInstance.put(`notification-seen/${id}`);
    if (res) dispatch(getNotification());
    return res;
  } catch (error) {
    if (!error.response) {
      throw error;
    }
    return rejectWithValue(error.response.data);
  }
});

const initialState = {
  data: [],
};
const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getNotification.fulfilled, (state, action) => {
      state.data = action.payload.data;
      state.status = true;
    });
    builder.addCase(getNotification.rejected, (state) => {
      state.status = true;
    });
    builder.addCase(getNotification.pending, (state) => {
      state.status = false;
    });
  },
});
export default notificationSlice.reducer;
