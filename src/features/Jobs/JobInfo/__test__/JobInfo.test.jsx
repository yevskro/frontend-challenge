import React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Theme from '../../../../shared/providers/Theme';
import JobInfo from '..';

test('renders', () => {
  render(
    <Theme>
      <JobInfo postedAt="2d ago" contract="Part Time" location="USA Only" />
    </Theme>
  );

  expect(screen.getByText('2d ago')).toBeInTheDocument();
  expect(screen.getByText('Part Time')).toBeInTheDocument();
  expect(screen.getByText('USA Only')).toBeInTheDocument();
});

test('snapshot', async () => {
  const tree = renderer
    .create(
      <Theme>
        <JobInfo newly featured>
          Durran
        </JobInfo>
      </Theme>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
