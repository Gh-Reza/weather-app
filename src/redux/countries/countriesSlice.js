import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  countries: [],
  isLoading: false,
  hasError: false,
};

export const getCountries = createAsyncThunk('countries/getCountries', async () => {
  const response = await fetch(' https://restcountries.com/v3.1/all');
  const data = await response.json();
  const neededData = data.map((d) => ({
    name: d.name.common,
    flag: d.flags.svg,
    independent: d.independent,
    capital: d.capital,
  }));
  const result = neededData.filter((country) => country.independent);
  return result;
});

const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCountries.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCountries.fulfilled, (state, action) => {
        state.countries = action.payload;
        state.isLoading = false;
      })
      .addCase(getCountries.rejected, (state) => {
        state.hasError = true;
        state.isLoading = false;
      });
  },
});

export default countriesSlice.reducer;
