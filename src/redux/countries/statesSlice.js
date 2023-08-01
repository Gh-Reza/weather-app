import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getCountryStates = createAsyncThunk(
  'countryStates/getCountryStates',
  async (country) => {
    try {
      const response = await fetch(
        'https://countriesnow.space/api/v0.1/countries/states',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            country,
          }),
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
        state.countryStates = action.payload.data.states;
        state.isLoading = false;
      })
      .addCase(getCountryStates.rejected, (state) => {
        state.isLoading = false;
        state.hasError = true;
      });
  },
});

export default countryStateSlice.reducer;
