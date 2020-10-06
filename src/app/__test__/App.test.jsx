import React from 'react';
import { render } from '@testing-library/react';
import App from '..';

test('renders', () => {
  const { getByRole } = render(<App />);
  expect(getByRole('application')).toBeInTheDocument();
  expect(getByRole('img', { name: 'header banner' })).toBeInTheDocument();
  expect(getByRole('main')).toBeInTheDocument();
});
