import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import SearchFilter from '..';

test('renders without crashing', () => {
  const { getByRole } = render(<SearchFilter value="CSS" />);
  const filterElement = getByRole('checkbox');
  expect(filterElement).toBeInTheDocument();
});

test('renders props', () => {
  const { getByText } = render(<SearchFilter value="CSS" />);
  const filterElement = getByText('CSS');
  expect(filterElement).toBeInTheDocument();
});

test('snapshot', async () => {
  const tree = renderer.create(<SearchFilter />).toJSON();
  expect(tree).toMatchSnapshot();
});
