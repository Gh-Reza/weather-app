import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../../redux/store';
import '@testing-library/jest-dom/extend-expect';
import State from '../State';

describe('Tests the Header component', () => {
  const component = (
    <BrowserRouter>
      <Provider store={store}>
        <State
          key={1}
          province="Kabul"
          icon=""
          condition=""
          temp={12}
        />
      </Provider>
    </BrowserRouter>
  );

  test('should match the snapshot', () => {
    const tree = render(component);
    expect(tree).toMatchSnapshot();
  });
});
