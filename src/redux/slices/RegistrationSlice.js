import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import API from '../../constants/RouteConstant/API';
import axios from '../../services/utils/axios';

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
  'registration/signUpUser',
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(API.signUpUser, data);
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
  'registration/getUserByCode',
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(API.getUserByCode, data);
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
  'registration/updateUserAtSignup',
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(API.updateUserAtSignup, data);
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
      const response = await axios.post(API.getUserDetailsByToken, {
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
export const registrationSlice = createSlice({
  name: 'registration',
  initialState,
  reducers: {
    fillForm: (state, action) => {
      state.form = { ...state.form, ...action?.payload };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(signUpUser.fulfilled, (state, action) => {
      state.form.resetOtpForm = true;
      state.userDetails.loading = false;
      state.userDetails.error = false;
      state.userDetails.message = action.payload.message;
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
  },
});

export const { fillForm } = registrationSlice.actions;
export const registrationReducer = registrationSlice.reducer;
