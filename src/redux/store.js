import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import countriesReducer from './countries/countriesSlice';

const store = configureStore({
  reducer: {
    countries: countriesReducer,
  },
}, applyMiddleware);

export default store;
