import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Job from '..';
import Theme from '../../../providers/Theme';
import jobData from '../../../data.json';

test('renders without crashing', () => {
  const { getByRole } = render(
    <Theme>
      <Job data={[jobData[0]]} />
    </Theme>
  );
  const jobElement = getByRole('contentinfo');
  expect(jobElement).toBeInTheDocument();
});

test('snapshot', async () => {
  const tree = renderer
    .create(
      <Theme>
        <Job data={[jobData[0]]} />
      </Theme>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
