import React from 'react';
import { render, screen } from '@testing-library/react';
import { Holdem } from './Holdem';

describe('renders Holdem', () => {
  it('and check it exists', () => {
    render(<Holdem />);
    expect(screen.getByText('Dziala czy nie dziala')).toBeVisible();
  });
});
