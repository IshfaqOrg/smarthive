import { createSlice } from '@reduxjs/toolkit';

const intialState = {
  data: [9],
};
const notificationSlice = createSlice({
  name: 'notification',
  intialState,
  reducers: {},
});
export default notificationSlice.reducer;
