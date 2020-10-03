import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import JobCompany from '..';
import Theme from '../../../providers/Theme';

test('renders without crashing', () => {
  const { getByRole } = render(
    <Theme>
      <JobCompany />
    </Theme>
  );

  getByRole('heading');
});

test('renders only company name', () => {
  const { getByText } = render(
    <Theme>
      <JobCompany>Durran</JobCompany>
    </Theme>
  );

  getByText('Durrann');
});

test('renders pills', async () => {
  const { getAllByRole } = render(
    <Theme>
      <JobCompany newly featured />
    </Theme>
  );

  const pillElements = getAllByRole('note');
  expect(pillElements.length).toBe(2);
});

test('renders featured pill', () => {
  const { getAllByRole } = render(
    <Theme>
      <JobCompany featured />
    </Theme>
  );

  const pillElements = getAllByRole('note');
  expect(pillElements.length).toBe(1);
});

test('renders newly pill', () => {
  const { getAllByRole } = render(
    <Theme>
      <JobCompany newly />
    </Theme>
  );

  const pillElements = getAllByRole('note');
  expect(pillElements.length).toBe(1);
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
