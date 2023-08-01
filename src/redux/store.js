import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import countriesReducer from './countries/countriesSlice';
import countryStatesReducer from './countries/statesSlice';
import weatherReducer from './weather/weatherSlice';

const store = configureStore({
  reducer: {
    countries: countriesReducer,
    countryStates: countryStatesReducer,
    weather: weatherReducer,
  },
}, applyMiddleware);

export default store;
