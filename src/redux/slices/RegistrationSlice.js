import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  authenticate: {
    isLoggedIn:
      !!localStorage.getItem("token") &&
      localStorage.getItem("userDetails") &&
      Object.keys(localStorage.getItem("userDetails")).length,
    token: localStorage.getItem("token"),
    loading: false,
  },
  form: {
    fullName: "",
    email: "",
    industry: "",
    phoneNumber: "",
    otp: "",
    authType: "email",
    resetForm: false,
    resetOtpForm: false,
  },
  userDetails: {
    userEmail: null,
    company: null,
    loading: false,
    error: false,
    message: "",
    isOtpVerified: false,
    data: JSON.parse(localStorage.getItem("userDetails")) || {},
  },
};

export const registrationSlice = createSlice({
  name: "registration",
  initialState,
  reducers: {},
});

export const registrationAction = registrationSlice.actions;
export const registrationReducer = registrationSlice.reducer;