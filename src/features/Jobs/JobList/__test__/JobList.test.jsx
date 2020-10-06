import React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import JobList from '..';

test('renders', () => {
  render(
    <JobList>
      <p>test</p>
    </JobList>
  );
  expect(screen.getByText('test')).toBeInTheDocument();
});

test('snapshot', async () => {
  const tree = renderer
    .create(
      <JobList>
        <p>test</p>
      </JobList>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
