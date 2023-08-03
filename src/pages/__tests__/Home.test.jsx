import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import '@testing-library/jest-dom/extend-expect';
import Home from '../Home';

describe('Tests the home page', () => {
  const component = (
    <Provider store={store}>
      <Home />
    </Provider>
  );

  test('Match the snapshot', () => {
    const tree = render(component);
    expect(tree).toMatchSnapshot();
  });

  test('Should contain an image component', () => {
    render(component);
    const main = screen.getByRole('main');
    expect(main).toBeInTheDocument();
  });
});
