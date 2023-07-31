import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import countriesReducer from './countries/countriesSlice';
import countryStatesReducer from './countries/statesSlice';

const store = configureStore({
  reducer: {
    countries: countriesReducer,
    countryStates: countryStatesReducer,
  },
}, applyMiddleware);

export default store;
