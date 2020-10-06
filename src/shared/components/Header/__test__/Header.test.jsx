import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Theme from '../../../providers/Theme';
import Header from '..';

test('renders', () => {
  const { getByRole } = render(
    <Theme>
      <Header />
    </Theme>
  );
  const appElement = getByRole('presentation');
  expect(appElement).toBeInTheDocument();
});

test('snapshot', async () => {
  const tree = renderer
    .create(
      <Theme>
        <Header />
      </Theme>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
