import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import API from '../../constants/RouteConstant/API';
import AxiosInstance from '../../services/utils/axios';

const initialState = {
  authenticate: {
    isLoggedIn:
      !!localStorage.getItem('token')
      && localStorage.getItem('userDetails')
      && Object.keys(localStorage.getItem('userDetails')).length,
    token: localStorage.getItem('token'),
    loading: false,
  },
  form: {
    fullName: '',
    email: '',
    industry: '',
    phoneNumber: '',
    otp: '',
    authType: 'email',
    resetForm: false,
    resetOtpForm: false,
  },
  userDetails: {
    userEmail: null,
    company: null,
    loading: false,
    error: false,
    message: '',
    isOtpVerified: false,
    data: JSON.parse(localStorage.getItem('userDetails')) || {},
  },
};

export const signUpUser = createAsyncThunk(
  'signUpUser',
  async (data, { rejectWithValue }) => {
    try {
      const response = await AxiosInstance.post(API.signUpUser, data);
      return response.data;
    } catch (err) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response.data);
    }
  },
);

export const getUserByCode = createAsyncThunk(
  'registeration/getUserByCode',
  async (data, { rejectWithValue }) => {
    try {
      const response = await AxiosInstance.post(API.getUserByCode, data);
      return response.data;
    } catch (err) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response.data);
    }
  },
);

export const updateUserAtSignup = createAsyncThunk(
  'registeration/updateUserAtSignup',
  async (data, { rejectWithValue }) => {
    try {
      const response = await AxiosInstance.post(API.updateUserAtSignup, data);
      return response.data;
    } catch (err) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response.data);
    }
  },
);

export const getUserDetailsByToken = createAsyncThunk(
  'registeration/getUserDetailsByToken',
  async (token, { rejectWithValue }) => {
    try {
      const response = await AxiosInstance.post(API.getUserDetailsByToken, {
        Authorization: `Bearer ${token}`,
      });
      return response.data;
    } catch (err) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response.data);
    }
  },
);
export const registerationSlice = createSlice({
  name: 'registeration',
  initialState,
  reducers: {
    fillForm: (state, action) => {
      state.form = { ...state.form, ...action?.payload };
    },
    loginUser: (state, { payload }) => {
      if (!state.userDetails.error) {
        localStorage.setItem('token', payload.token);
        state.authenticate.isLoggedIn = true;
        if (payload && payload.expires_in) {
          state.authenticate.token = payload;
        } else {
          const tokenJson = {
            access_token: payload.token,
            scope: 'openid profile email address phone',
            expires_in: Number(payload.expireTime),
            token_type: 'Bearer',
          };
          state.authenticate.token = tokenJson;
          // state.isRefresh = true;
        }
      }
      // state.loading = true
    },
    logoutUser: (state) => {
      state.form.resetForm = true;
      localStorage.clear();
      state.authenticate.isLoggedIn = false;
      state.authenticate.token = null;
      state.userDetails.data = { ...initialState.userDetails.data };
      state.form = { resetForm: true };
      window.location.reload();
    },
  },
  extraReducers: (builder) => {
    builder.addCase(signUpUser.fulfilled, (state, action) => {
      state.form.resetOtpForm = true;
      state.userDetails.loading = false;
      state.userDetails.error = false;
      state.userDetails.message = action.payload.message;
      // eslint-disable-next-line no-unused-expressions
      action.payload.data.prefer_contact === 'email'
        ? (state.form = { ...state.form, resetForm: true })
        : (state.userDetails.data = action.payload.data);
    });
    builder.addCase(signUpUser.rejected, (state, action) => {
      state.userDetails.loading = false;
      state.userDetails.error = true;
      state.userDetails.data = '';
      state.userDetails.message = action.payload;
      state.form = {
        ...state.form,
        resetForm: action.payload?.resetForm || false,
      };
    });
    builder.addCase(signUpUser.pending, (state) => {
      state.userDetails.loading = true;
      state.userDetails.error = false;
    });

    //

    builder.addCase(updateUserAtSignup.fulfilled, (state, action) => {
      state.form.resetOtpForm = true;
      state.userDetails.loading = false;
      state.userDetails.error = false;
      state.userDetails.message = '';
      state.userDetails.data = action.payload.data;
    });
    builder.addCase(updateUserAtSignup.rejected, (state, action) => {
      state.form.resetOtpForm = true;
      state.userDetails.loading = false;
      state.userDetails.error = true;
      state.userDetails.message = action.payload;
    });
    builder.addCase(updateUserAtSignup.pending, (state) => {
      state.userDetails.loading = true;
      state.userDetails.error = false;
    });
    builder.addCase(getUserDetailsByToken.fulfilled, (state, action) => {
      state.userDetails.loading = false;
      state.userDetails.error = false;
      state.authenticate.loading = false;
      state.userDetails.message = '';
      localStorage.setItem('userDetails', JSON.stringify(action.payload?.data));
      state.userDetails = {
        ...state.userDetails.data,
        ...action.payload?.data,
      };
    });
    builder.addCase(getUserDetailsByToken.rejected, (state, action) => {
      state.userDetails.loading = false;
      state.userDetails.error = true;
      state.authenticate.loading = false;
      state.userDetails.message = action.payload || JSON.stringify(action.payload?.message.error);
      state.userDetails.data = {};
    });
    builder.addCase(getUserDetailsByToken.pending, (state) => {
      state.userDetails.loading = true;
      state.authenticate.loading = true;
    });
    builder.addCase(getUserByCode.fulfilled, (state, action) => {
      state.userDetails.userEmail = action.payload.data?.email;
      state.userDetails.company = action.payload.data?.company;
    });
  },
});

export const { loginUser, logoutUser, fillForm } = registerationSlice.actions;
export const registerationReducer = registerationSlice.reducer;
