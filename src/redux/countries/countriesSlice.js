import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  countries: [],
  isLoading: false,
};

export const getCountries = createAsyncThunk('countries/getCountries', async () => {
  const response = await fetch(' https://restcountries.com/v3.1/all');
  const data = await response.json();
  const neededData = data.map((d) => ({
    name: d.name.common,
    flag: d.flags.svg,
  }));
  return neededData;
});

const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCountries.fulfilled, (state, action) => {
        state.countries = action.payload;
      });
  },
});

export default countriesSlice.reducer;
