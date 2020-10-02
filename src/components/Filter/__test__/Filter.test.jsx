import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Filter from '../Filter';

test('renders without crashing', () => {
  const { getByRole } = render(<Filter value="CSS" />);
  const filterElement = getByRole('checkbox');
  expect(filterElement).toBeInTheDocument();
});

test('renders props', () => {
  const { getByText } = render(<Filter value="CSS" />);
  const filterElement = getByText('CSS');
  expect(filterElement).toBeInTheDocument();
});

test('snapshot', async () => {
  const tree = renderer.create(<Filter />).toJSON();
  expect(tree).toMatchSnapshot();
});
