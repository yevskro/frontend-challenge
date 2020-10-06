import React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Theme from '../../../shared/providers/Theme';
import SearchByFilters from '..';
import SearchFilters from '../SearchFilters';
import SearchFilter from '../SearchFilter';

test('renders', () => {
  render(
    <Theme>
      <SearchByFilters visible>
        <SearchFilters>
          <SearchFilter>CSS</SearchFilter>
        </SearchFilters>
      </SearchByFilters>
    </Theme>
  );

  expect(screen.getByText('CSS')).toBeInTheDocument();
});

test('changes visibility', () => {
  render(
    <Theme>
      <SearchByFilters visible={false}>
        <SearchFilters>
          <SearchFilter>CSS</SearchFilter>
        </SearchFilters>
      </SearchByFilters>
    </Theme>
  );

  expect(screen.getByRole('search')).toHaveStyleRule('visibility', 'hidden');
});

test('snapshot', async () => {
  const tree = renderer
    .create(
      <Theme>
        <SearchByFilters visible>
          <SearchFilters>
            <SearchFilter>CSS</SearchFilter>
          </SearchFilters>
        </SearchByFilters>
      </Theme>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
