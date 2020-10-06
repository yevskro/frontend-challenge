import React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import jobData from '../../../../shared/test/test-data.json';
import Theme from '../../../../shared/providers/Theme';
import Job from '..';

/*
    "id": 1,
    "company": "Photosnap",
    "logo": "/assets/images/photosnap.svg",
    "newly": true,
    "featured": false,
    "position": "Senior Frontend Developer",
    "role": "Frontend",
    "level": "Senior",
    "postedAt": "2d ago",
    "contract": "Part Time",
    "location": "USA Only",
    "languages": ["HTML", "CSS", "JavaScript"],
    "tools": []
*/
test('renders', () => {
  render(
    <Theme>
      <Job data={jobData[0]} />
    </Theme>
  );
  expect(screen.getByText('Photosnap')).toBeInTheDocument();
  expect(screen.getByRole('img', { name: 'company logo' })).toHaveAttribute(
    'src',
    '/assets/images/photosnap.svg'
  );
  expect(screen.getByRole('img', { name: 'company logo' })).toBeInTheDocument();
  expect(screen.getByText('NEW!')).toBeInTheDocument();
  expect(screen.getByText('Senior Frontend Developer')).toBeInTheDocument();
  expect(screen.getByText('Frontend')).toBeInTheDocument();
  expect(screen.getByText('Senior')).toBeInTheDocument();
  expect(screen.getByText('2d ago')).toBeInTheDocument();
  expect(screen.getByText('Part Time')).toBeInTheDocument();
  expect(screen.getByText('USA Only')).toBeInTheDocument();
  expect(screen.getByText('HTML')).toBeInTheDocument();
  expect(screen.getByText('CSS')).toBeInTheDocument();
  expect(screen.getByText('JavaScript')).toBeInTheDocument();
});

test('snapshot', async () => {
  const tree = renderer
    .create(
      <Theme>
        <Job data={jobData[0]} />
      </Theme>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
