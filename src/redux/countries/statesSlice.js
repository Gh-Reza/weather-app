import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getCountryStates = createAsyncThunk(
  'countryStates/getCountryStates',
  async (country) => {
    const response = await fetch(
      `https://www.universal-tutorial.com/api/states/${country}`,
      {
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJfZW1haWwiOiJtdmdhZGFnaUBnbWFpbC5jb20ifSwiZXhwIjoxNTY2MjM0ODU0fQ.nMWPN38zptwwDKAo11bFyjhCRuzNhZc6NqqCaYJVxP0',
          Accept: 'application/json',
        },
      },
    );
    const data = await response.json();
    return data;
  },
);

const initialState = {
  countryStates: [],
  isLoading: false,
};

const countryStateSlice = createSlice({
  name: 'countryStates',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCountryStates.pending, (state) => {
      state.isLoading = true;
    }).addCase(getCountryStates.fulfilled, (state, action) => {
      state.countryStates = action.payload;
    });
  },
});

export default countryStateSlice.reducer;
