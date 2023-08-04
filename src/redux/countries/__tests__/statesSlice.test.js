import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import { getCountryStates } from '../statesSlice';
import '@testing-library/jest-dom';

const mockStore = configureStore([thunk]);
jest.setTimeout(20000);

describe('statesSlice', () => {
  let store;
  beforeEach(() => {
    store = mockStore({
      countryStates: {
        countryStates: [],
        isLoading: false,
        hasError: false,
      },
    });
  });

  it('should dispatch getCountryStates action', async () => {
    await store.dispatch(getCountryStates('United States'));
    const actions = store.getActions();
    expect(actions[0].type).toEqual('countryStates/getCountryStates/pending');
    expect(actions[1].type).toEqual('countryStates/getCountryStates/fulfilled');
  });
});
