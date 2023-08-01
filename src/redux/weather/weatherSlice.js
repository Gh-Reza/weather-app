import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getWeather = createAsyncThunk(
  'countryStates/getWeather',
  async (stateName) => {
    const key = 'b134e251af58430f964152538220407';
    const response = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${stateName}&days=3&aqi=yes`,
    );
    const data = await response.json();
    const neededData = {
      province: data.location.region,
      condition: data.current.condition.text,
      icon: data.current.condition.icon,
      temp: data.current.temp_c,
      id: data.location.tz_id + Date.now(),
    };
    // console.log(neededData);
    return neededData;
  },
);

const initialState = {
  weatherDetails: [],
  isLoading: false,
  hasError: false,
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
        state.weatherDetails.push(action.payload);
      })
      .addCase(getWeather.rejected, (state) => {
        state.hasError = true;
      });
  },
});

export default weatherSlice.reducer;
