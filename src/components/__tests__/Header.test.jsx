import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../../redux/store';
import '@testing-library/jest-dom/extend-expect';
import Header from '../Header';

describe('Tests the Header component', () => {
  const component = (
    <BrowserRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  test('Match the snapshot', () => {
    const tree = render(component);
    expect(tree).toMatchSnapshot();
  });

  test('Should contain an img tag', () => {
    render(component);
    const img = screen.getByRole('img');
    expect(img).toBeInTheDocument();
  });

  test('Should display the text', () => {
    render(component);
    const text = screen.getByText('WeatherAPP');
    expect(text).toBeInTheDocument();
  });
});
