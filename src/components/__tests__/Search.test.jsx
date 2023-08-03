import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../../redux/store';
import '@testing-library/jest-dom/extend-expect';
import Search from '../Search';

describe('Tests the Header component', () => {
  const component = (
    <BrowserRouter>
      <Provider store={store}>
        <Search />
      </Provider>
    </BrowserRouter>
  );

  test('should match the snapshot', () => {
    const tree = render(component);
    expect(tree).toMatchSnapshot();
  });

  test('Should contain an input element', () => {
    render(component);
    const input = screen.getByRole('textbox');
    expect(input).toBeInTheDocument();
  });

  test('Should contain an ul element', () => {
    render(component);
    const ul = screen.getByRole('list');
    expect(ul).toBeInTheDocument();
  });
});
