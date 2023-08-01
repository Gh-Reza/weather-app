import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getWeather = createAsyncThunk(
  'countryStates/getWeather',
  async (stateName) => {
    const key = 'b134e251af58430f964152538220407';
    const response = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${stateName}&days=3&aqi=yes`,
    );
    const data = await response.json();
    console.log(data);
    return data;
  },
);

const initialState = {
  weatherDetails: {},
  isLoading: false,
};

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getWeather.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getWeather.fulfilled, (state, action) => {
        state.weatherDetails = action.payload;
      });
  },
});

export default weatherSlice.reducer;
