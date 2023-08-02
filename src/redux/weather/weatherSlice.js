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
    return neededData;
  },
);

const initialState = {
  weatherDetails: [],
  isLoading: true,
  hasError: false,
};

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    resetStore: (state, action) => {
      state.weatherDetails = action.payload;
      state.isLoading = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getWeather.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getWeather.fulfilled, (state, action) => {
        state.weatherDetails.push(action.payload);
        state.isLoading = false;
      })
      .addCase(getWeather.rejected, (state) => {
        state.hasError = true;
        // state.isLoading = false;
      });
  },
});

export const { resetStore } = weatherSlice.actions;
export default weatherSlice.reducer;
