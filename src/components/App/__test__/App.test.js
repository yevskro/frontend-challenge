import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';
import '@testing-library/jest-dom/extend-expect';

test('renders without crashing', () => {
  const { getByRole } = render(<App />);
  const appElement = getByRole("app");
  expect(appElement).toBeInTheDocument();
});
