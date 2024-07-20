import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getCountryStates = createAsyncThunk(
  'countryStates/getCountryStates',
  async () => {
    try {
      const response = await fetch(
        'http://localhost:3333/provinces?lang=en',
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      const data = await response.json();
      return data;
    } catch (error) {
      return error;
    }
  },
);

const initialState = {
  countryStates: [],
  isLoading: false,
  hasError: false,
};

const countryStateSlice = createSlice({
  name: 'countryStates',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCountryStates.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCountryStates.fulfilled, (state, action) => {
        state.countryStates = action.payload.data;
        state.isLoading = false;
      })
      .addCase(getCountryStates.rejected, (state) => {
        state.isLoading = false;
        state.hasError = true;
      });
  },
});

export default countryStateSlice.reducer;
