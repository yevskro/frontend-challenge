import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import SearchFilters from '../SearchFilters';
import SearchFilter from '../../SearchFilter/SearchFilter';

test('renders without crashing', () => {
  const { getByRole } = render(<SearchFilters />);
  const filtersElement = getByRole('listbox');
  expect(filtersElement).toBeInTheDocument();
});

test('renders children', () => {
  const { getByRole } = render(
    <SearchFilters>
      <SearchFilter value="CSS" />
    </SearchFilters>
  );
  const filterElement = getByRole('listitem');
  expect(filterElement).toBeInTheDocument();
});

test('snapshot', async () => {
  const tree = renderer.create(<SearchFilters />).toJSON();
  expect(tree).toMatchSnapshot();
});
