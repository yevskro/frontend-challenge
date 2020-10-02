import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer'; 
import Filters from '../Filters';
import Filter from '../../Filter/Filter';

test('renders without crashing', () => {
  const { getByRole } = render(<Filters/>);
  const filtersElement = getByRole('listbox');
  expect(filtersElement).toBeInTheDocument();
});

test('renders children', () => {
    const { getByRole } = render(<Filters><Filter value='CSS'/></Filters>);
    const filterElement = getByRole('listitem');
    expect(filterElement).toBeInTheDocument();
});

test('snapshot', async () => {
  const tree = renderer
    .create(<Filters/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
})