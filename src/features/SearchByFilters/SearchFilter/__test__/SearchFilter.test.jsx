import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderer from 'react-test-renderer';
import Theme from '../../../../shared/providers/Theme';
import SearchFilter from '..';

test('renders', () => {
  render(
    <Theme>
      <SearchFilter>CSS</SearchFilter>
    </Theme>
  );
  expect(screen.getByText('CSS')).toBeInTheDocument();
});

test('onAddFilter callback invoked', () => {
  const mock = jest.fn((filter) =>
    expect(filter).toStrictEqual({ test: 'test' })
  );

  render(
    <Theme>
      <SearchFilter onAddFilter={mock} filter={{ test: 'test' }}>
        CSS
      </SearchFilter>
    </Theme>
  );

  userEvent.click(screen.getByText('CSS'));
  expect(mock).toHaveBeenCalledTimes(1);
});

test('renders a remove filter with a remove icon', () => {
  render(
    <Theme>
      <SearchFilter value="CSS" remove />
    </Theme>
  );

  const img = screen.getByRole('img');
  expect(img).toHaveAttribute('src', '/assets/images/icon-remove.svg');
  expect(img).toBeInTheDocument();
});

test('onRemoveFilter callback invoked', () => {
  const mock = jest.fn((filter) =>
    expect(filter).toStrictEqual({ test: 'test' })
  );

  render(
    <Theme>
      <SearchFilter
        value="CSS"
        remove
        onRemoveFilter={mock}
        filter={{ test: 'test' }}
      />
    </Theme>
  );

  const img = screen.getByRole('img');
  userEvent.click(img);
  expect(mock).toHaveBeenCalledTimes(1);
});

test('snapshot', async () => {
  const mock = jest.fn();
  const tree = renderer
    .create(
      <Theme>
        <SearchFilter filter={{ test: 'test' }} onAddFilter={mock}>
          CSS
        </SearchFilter>
        <SearchFilter filter={{ test: 'test' }} remove onRemoveFilter={mock}>
          HTML
        </SearchFilter>
      </Theme>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
