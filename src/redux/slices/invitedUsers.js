import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import API from '../../constants/RouteConstant/API';
import AxiosInstance from '../../services/utils/axios';

export const getInvitedUsers = createAsyncThunk(
  'getInvitedUsers',
  async () => {
    const response = await AxiosInstance.get(`${API.getInvitedUsers}`);
    return response.data;
  },
);
export const inviteUser = createAsyncThunk('inviteUser', async (data, { dispatch }) => {
  const response = await AxiosInstance.post(`${API.inviteUser}`, data.invite);
  dispatch(getInvitedUsers());
  return response.data;
});

const initialState = {
  error: '',
  loading: '',
  status: false,
  data: {},
  list: [],
  cancelInvitationStatus: false,
  cancelInvitationSuccessMessage: '',
  cancelInvitationErrorMessage: '',
};
const inviteUsers = createSlice({
  name: 'inviteUsers',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getInvitedUsers.fulfilled, (state, action) => {
      state.inviteLoading = false;
      state.inviteStatus = true;
      state.list = action.payload.data;
      state.inviteError = '';
    });
    builder.addCase(getInvitedUsers.rejected, (state, action) => {
      state.error = action.error.message?.error || action.error.message;
      state.loading = false;
    });
    builder.addCase(getInvitedUsers.pending, (state) => {
      state.loading = true;
      state.error = '';
      state.status = false;
    });
    builder.addCase(inviteUser.fulfilled, (state, action) => {
      state.inviteLoading = false;
      state.data = action.payload.data;
      state.inviteError = action.payload.error || '';
      state.status = true;
    });
    builder.addCase(inviteUser.rejected, (state, action) => {
      state.inviteLoading = false;
      state.status = false;
      state.inviteError = action.error.message?.error || action.error.message;
    });
    builder.addCase(inviteUser.pending, (state) => {
      state.inviteLoading = true;
      state.inviteError = '';
      state.status = false;
    });
  },
});
export default inviteUsers.reducer;
