import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import '@testing-library/jest-dom/extend-expect';
import Details from '../Details';

describe('Tests the details page', () => {
  const component = (
    <Provider store={store}>
      <Details />
    </Provider>
  );

  it('Match the snapshot', () => {
    const tree = render(component);
    expect(tree).toMatchSnapshot();
  });
});
