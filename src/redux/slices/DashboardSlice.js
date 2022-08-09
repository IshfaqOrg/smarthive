import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

export const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    increment: (state) => {
      state.count++;
    },
  },
});

export const { increment } = dashboardSlice.actions;
export const dashboardReducers = dashboardSlice.reducer;
