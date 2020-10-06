import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderer from 'react-test-renderer';
import Theme from '../../../shared/providers/Theme';
import jobData from '../../../shared/test/test-data.json';
import Jobs from '..';

test('renders', () => {
  render(
    <Theme>
      <Jobs jobs={[jobData[0], jobData[1]]} />
    </Theme>
  );

  const searchElement = screen.getByRole('search');
  expect(screen.getByRole('search')).toBeInTheDocument();
  expect(searchElement).toHaveStyleRule('visibility', 'hidden');
  const jobElements = screen.getAllByRole('img', { name: 'company logo' });
  expect(jobElements.length).toBe(2);
  expect(jobElements[0]).toBeInTheDocument();
  expect(jobElements[1]).toBeInTheDocument();
});

test('search component appears when applying the first filter', () => {
  render(
    <Theme>
      <Jobs jobs={[jobData[0], jobData[1]]} />
    </Theme>
  );

  const htmlFilterElement = screen.getByText('HTML');
  expect(htmlFilterElement).toBeInTheDocument();
  userEvent.click(htmlFilterElement);
  expect(screen.getByRole('search')).toHaveStyleRule('visibility', 'visible');
});

test('jobs get filtered by filter', () => {
  render(
    <Theme>
      <Jobs jobs={[jobData[0], jobData[1]]} />
    </Theme>
  );

  const htmlFilterElement = screen.getByText('HTML');
  expect(htmlFilterElement).toBeInTheDocument();
  userEvent.click(htmlFilterElement);
  const jobElements = screen.getAllByRole('img', { name: 'company logo' });
  expect(jobElements.length).toBe(1);
  expect(jobElements[0]).toHaveAttribute('src', '/assets/images/photosnap.svg');
  expect(jobElements[0]).toBeInTheDocument();
});

test('jobs get unfiltered after removing a filter', () => {
  render(
    <Theme>
      <Jobs jobs={[jobData[0], jobData[1]]} />
    </Theme>
  );

  const htmlFilterElement = screen.getByText('HTML');
  expect(htmlFilterElement).toBeInTheDocument();
  userEvent.click(htmlFilterElement);
  let jobElements = screen.getAllByRole('img', { name: 'company logo' });
  expect(jobElements.length).toBe(1);
  expect(jobElements[0]).toBeInTheDocument();
  const unfilterElement = screen.getByRole('img', { name: 'remove icon' });
  expect(unfilterElement).toBeInTheDocument();
  userEvent.click(unfilterElement);
  jobElements = screen.getAllByRole('img', { name: 'company logo' });
  expect(jobElements.length).toBe(2);
  expect(jobElements[0]).toHaveAttribute('src', '/assets/images/photosnap.svg');
  expect(jobElements[0]).toBeInTheDocument();
  expect(jobElements[1]).toHaveAttribute('src', '/assets/images/manage.svg');
  expect(jobElements[1]).toBeInTheDocument();
});

test('jobs original state is restored after clearing filters', () => {
  render(
    <Theme>
      <Jobs jobs={[jobData[0], jobData[1]]} />
    </Theme>
  );

  const htmlFilterElement = screen.getByText('HTML');
  expect(htmlFilterElement).toBeInTheDocument();
  userEvent.click(htmlFilterElement);
  let jobElements = screen.getAllByRole('img', { name: 'company logo' });
  expect(jobElements.length).toBe(1);
  expect(jobElements[0]).toBeInTheDocument();
  const clearElement = screen.getByRole('button', { name: 'Clear' });
  expect(clearElement).toBeInTheDocument();
  userEvent.click(clearElement);
  jobElements = screen.getAllByRole('img', { name: 'company logo' });
  expect(jobElements.length).toBe(2);
  expect(jobElements[0]).toHaveAttribute('src', '/assets/images/photosnap.svg');
  expect(jobElements[0]).toBeInTheDocument();
  expect(jobElements[1]).toHaveAttribute('src', '/assets/images/manage.svg');
  expect(jobElements[1]).toBeInTheDocument();
});

test('snapshot', async () => {
  const tree = renderer
    .create(
      <Theme>
        <Jobs jobs={[jobData[0], jobData[1]]} />
      </Theme>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
