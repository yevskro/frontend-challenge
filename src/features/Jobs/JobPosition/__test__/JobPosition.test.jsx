import React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Theme from '../../../../shared/providers/Theme';
import JobPosition from '..';

test('renders', () => {
  render(
    <Theme>
      <JobPosition
        company={{
          name: 'company name',
          newly: true,
          featured: true,
        }}
        postedAt="posted at"
        contract="contract"
        location="location"
      >
        position
      </JobPosition>
    </Theme>
  );

  expect(screen.getByText('company name')).toBeInTheDocument();
  expect(screen.getByText('NEW!')).toBeInTheDocument();
  expect(screen.getByText('FEATURED')).toBeInTheDocument();
  expect(screen.getByText('posted at')).toBeInTheDocument();
  expect(screen.getByText('contract')).toBeInTheDocument();
  expect(screen.getByText('location')).toBeInTheDocument();
  expect(screen.getByText('position')).toBeInTheDocument();
});

test('snapshot', async () => {
  const tree = renderer
    .create(
      <Theme>
        <JobPosition
          company={{
            name: 'company name',
            newly: true,
            featured: true,
          }}
          postedAt="posted at"
          contract="contract"
          location="location"
        >
          position
        </JobPosition>
      </Theme>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
