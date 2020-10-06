import React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Theme from '../../../../shared/providers/Theme';
import SearchFilters from '..';
import SearchFilter from '../../SearchFilter';

test('renders', () => {
  render(
    <Theme>
      <SearchFilters>
        <SearchFilter>CSS</SearchFilter>
      </SearchFilters>
    </Theme>
  );

  expect(screen.getByText('CSS')).toBeInTheDocument();
});

test('component default justification is to flex-start', () => {
  render(
    <Theme>
      <SearchFilters>
        <SearchFilter>CSS</SearchFilter>
      </SearchFilters>
    </Theme>
  );

  expect(screen.getByRole('list')).toHaveStyleRule(
    'justify-content',
    'flex-start'
  );
});

test('component can adjust its justification to flex-end', () => {
  render(
    <Theme>
      <SearchFilters flexEnd>
        <SearchFilter>CSS</SearchFilter>
      </SearchFilters>
    </Theme>
  );

  expect(screen.getByRole('list')).toHaveStyleRule(
    'justify-content',
    'flex-end'
  );
});

test('snapshot', async () => {
  const tree = renderer
    .create(
      <Theme>
        <SearchFilters flexEnd>
          <SearchFilter>CSS</SearchFilter>
        </SearchFilters>
        <SearchFilters>
          <SearchFilter>CSS</SearchFilter>
        </SearchFilters>
      </Theme>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
