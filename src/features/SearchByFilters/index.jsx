import React from 'react';
import styled from 'styled-components';
import SearchClearButton from './SearchClearButton';

function SearchByFilters({ children, visible, onClear }) {
  return (
    <StyledSearchByFilters visible={visible} role="search">
      {children}
      <SearchClearButton onClick={onClear} />
    </StyledSearchByFilters>
  );
}

const StyledSearchByFilters = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 75px;
  padding: 10px 25px 10px 21px;
  margin-bottom: 56px;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0px 10px 10px ${({ theme }) => theme.color.shadow};
  visibility: ${({ visible }) => (visible ? 'visibile' : 'hidden')};
`;

export default SearchByFilters;
