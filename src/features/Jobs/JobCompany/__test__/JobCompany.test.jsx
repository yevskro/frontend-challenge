import React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Theme from '../../../../shared/providers/Theme';
import JobCompany from '..';

test('renders', () => {
  render(
    <Theme>
      <JobCompany newly featured>
        Photosnap
      </JobCompany>
    </Theme>
  );

  expect(screen.getByText('Photosnap')).toBeInTheDocument();
  expect(screen.getByText('NEW!')).toBeInTheDocument();
  expect(screen.getByText('FEATURED')).toBeInTheDocument();
});

test('renders just newly pill', async () => {
  render(
    <Theme>
      <JobCompany newly />
    </Theme>
  );

  expect(screen.getByText('NEW!')).toBeInTheDocument();
  expect(screen.queryByText('FEATURED')).not.toBeInTheDocument();
});

test('renders featured pill', () => {
  render(
    <Theme>
      <JobCompany featured />
    </Theme>
  );

  expect(screen.queryByText('NEW!')).not.toBeInTheDocument();
  expect(screen.getByText('FEATURED')).toBeInTheDocument();
});

test('snapshot', async () => {
  const tree = renderer
    .create(
      <Theme>
        <JobCompany newly featured>
          Durran
        </JobCompany>
      </Theme>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
