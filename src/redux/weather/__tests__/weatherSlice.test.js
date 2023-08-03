import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import { getWeather } from '../weatherSlice';
import '@testing-library/jest-dom';

const mockStore = configureStore([thunk]);
jest.setTimeout(20000);

describe('weatherSlice', () => {
  let store;
  beforeEach(() => {
    store = mockStore({
      weather: {
        weatherDetails: [],
        isLoading: false,
        hasError: false,
      },
    });
  });

  it('should dispatch getWeather action', async () => {
    await store.dispatch(getWeather('New York'));
    const actions = store.getActions();
    expect(actions[0].type).toEqual('weather/getWeather/pending');
    expect(actions[1].type).toEqual('weather/getWeather/fulfilled');
  });
});
