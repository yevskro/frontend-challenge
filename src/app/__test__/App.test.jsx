import React from 'react';
import { render } from '@testing-library/react';
import App from '..';

test('renders without crashing', () => {
  const { getByRole } = render(<App />);
  const appElement = getByRole('application');
  expect(appElement).toBeInTheDocument();
});
