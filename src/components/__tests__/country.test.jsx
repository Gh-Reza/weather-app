import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../../redux/store';
import '@testing-library/jest-dom/extend-expect';
import Country from '../country';

describe('Tests the country component', () => {
  const component = (
    <BrowserRouter>
      <Provider store={store}>
        <Country
          key="Afghnistan"
          name="Afghnistan"
          flag=""
          capital="Kabul"
          lat={12}
          lng={3}
          onClick={() => {}}
        />
      </Provider>
    </BrowserRouter>
  );

  test('Match the snapshot', () => {
    const tree = render(component);
    expect(tree).toMatchSnapshot();
  });
});
