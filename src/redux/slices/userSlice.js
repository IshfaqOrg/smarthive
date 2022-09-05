import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import API from '../../constants/RouteConstant/API';
import AxiosInstance from '../../services/utils/axios';

const initialState = {
  userInfo: {},
  userInfoLoading: false,
  userInfoStatus: '',
  userInfoError: '',
  approveUserLoading: false,
  users: [],
  loading: false,
  status: false,
  updateUserStatus: false,
  deleteUserStatus: false,
  error: '',
  getUserError: '',
  data: {},
  inviteLoading: false,
  inviteStatus: false,
  inviteError: '',
  deleteUserSuccessMessage: '',
  deleteUserErrorMessage: '',
  integrations: [],
  userIntegrations: [],
};

export const getUserInfo = createAsyncThunk(
  'getUserInfo',
  async () => {
    const response = await AxiosInstance.get(`${API.BASE_URL}${API.getUserInfo}`);
    return response.data;
  },
);

export const getUsers = createAsyncThunk('getUsers', async () => {
  const response = await AxiosInstance.get(`${API.BASE_URL}${API.getUsers}`);
  return response.data;
});

export const uploadProfileImage = createAsyncThunk(
  'inviteUser',
  async (data, { dispatch }) => {
    const response = await AxiosInstance.post(`${API.BASE_URL}/api/v1/profile/image`, data);
    dispatch(getUserInfo());
    return response.data;
  },
);
const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUserInfo.fulfilled, (state, action) => {
      localStorage.setItem('userData', JSON.stringify(action.payload));
      state.userInfo = action.payload;
      state.userInfoLoading = false;
      state.userInfoStatus = true;
      state.userInfoError = false;
    });
    builder.addCase(getUserInfo.rejected, (state, action) => {
      state.getUserError = action.error.message;
      state.userInfoLoading = false;
      state.userInfoError = true;
    });
    builder.addCase(getUserInfo.pending, (state) => {
      state.userInfoLoading = false;
      state.userInfoStatus = false;
      state.userInfoError = false;
    });
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.users = action.payload.data;
      state.loading = false;
      state.status = true;
      state.getUserError = false;
    });
    builder.addCase(getUsers.pending, (state) => {
      state.loading = true;
      state.getUserError = false;
      state.status = false;
    });
    builder.addCase(getUsers.rejected, (state, action) => {
      state.loading = false;
      state.status = false;
      state.getUserError = action.error.message?.error || action.error.message;
    });
  },
});
export default userSlice.reducer;
