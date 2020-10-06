import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderer from 'react-test-renderer';
import Theme from '../../../../shared/providers/Theme';
import SearchClearButton from '..';

test('renders', () => {
  render(
    <Theme>
      <SearchClearButton />
    </Theme>
  );
  expect(screen.getByText('Clear')).toBeInTheDocument();
});

test('onClick callback invoked', () => {
  const mock = jest.fn();
  render(
    <Theme>
      <SearchClearButton onClick={mock} />
    </Theme>
  );

  userEvent.click(screen.getByText('Clear'));
  expect(mock).toHaveBeenCalledTimes(1);
});

test('snapshot', async () => {
  const mock = jest.fn();
  const tree = renderer
    .create(
      <Theme>
        <SearchClearButton onClick={mock} />
      </Theme>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
