import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  loading: false,
  error: false,
  message: '',
  data: null,
};
export const getCountryCode = createAsyncThunk('country/getCountryCode', async () => {
  const response = await axios.get('https://ipapi.co/json');
  return response.data;
});
const countrySlice = createSlice({
  name: 'country',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder.addCase(getCountryCode.pending, ((state) => {
      state.loading = true;
    }));
    builder.addCase(getCountryCode.fulfilled, (((state, action) => {
      state.loading = false;
      state.data = action.payload;
    })));
    builder.addCase(getCountryCode.rejected, (state, action) => {
      state.loading = false;
      state.message = action.error;
      console.log('Error Occured:', action.error);
    });
  },

});
export default countrySlice.reducer;
