import React from 'react';
import { render, screen } from '@testing-library/react';
import { App } from './App';

test('renders learn react link', () => {
  render(<App text="Only for test purposes" />);
  const linkElement = screen.getByText(/Only for test purposes/i);
  expect(linkElement).toBeInTheDocument();
});
