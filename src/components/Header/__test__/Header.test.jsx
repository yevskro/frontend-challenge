import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Header from '../Header';

test('renders without crashing', () => {
  const { getByRole } = render(<Header />);
  const appElement = getByRole('presentation');
  expect(appElement).toBeInTheDocument();
});

test('snapshot', async () => {
  const tree = renderer.create(<Header />).toJSON();
  expect(tree).toMatchSnapshot();
});
