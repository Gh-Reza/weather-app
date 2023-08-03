import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import { getCountries } from '../countriesSlice';
import '@testing-library/jest-dom';

const mockStore = configureStore([thunk]);

describe('countriesSlice', () => {
  let store;
  beforeEach(() => {
    store = mockStore({
      countries: {
        countries: [],
        loading: false,
        error: null,
      },
    });
  });

  it('should dispatch getCountries action', async () => {
    await store.dispatch(getCountries());
    const actions = store.getActions();
    expect(actions[0].type).toEqual('countries/getCountries/pending');
    expect(actions[1].type).toEqual('countries/getCountries/fulfilled');
  });
});
