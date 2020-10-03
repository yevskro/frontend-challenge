import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import JobInfo from '..';
import Theme from '../../../providers/Theme';

const testData = {
  postedAt: '2d ago',
  contract: 'Part Time',
  location: 'USA Only',
};

test('renders without crashing', () => {
  const { getByRole } = render(
    <Theme>
      <JobInfo
        postedAt={testData.postedAt}
        contract={testData.contract}
        location={testData.location}
      />
    </Theme>
  );

  const jobElement = getByRole('list');
  expect(jobElement).toBeInTheDocument();
});

test('renders info elements', () => {
  const { getAllByRole } = render(
    <Theme>
      <JobInfo
        postedAt={testData.postedAt}
        contract={testData.contract}
        location={testData.location}
      />
    </Theme>
  );

  const infoElements = getAllByRole('listitem');
  expect(infoElements.length).toBe(3);
  expect(infoElements[0].textContent).toStrictEqual(testData.postedAt);
  expect(infoElements[0]).toBeInTheDocument();
  expect(infoElements[1].textContent).toStrictEqual(testData.contract);
  expect(infoElements[1]).toBeInTheDocument();
  expect(infoElements[2].textContent).toStrictEqual(testData.location);
  expect(infoElements[2]).toBeInTheDocument();
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
