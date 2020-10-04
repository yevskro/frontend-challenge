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
  padding: 10px 25px 10px 21px;
  align-items: center;
  border-radius: 5px;
  background-color: #fff;
  justify-content: space-between;
  box-shadow: 0px 10px 10px ${({ theme }) => theme.color.shadow};
  margin-bottom: 56px;
  visibility: ${({ visible }) => (visible ? 'visibile' : 'hidden')};
  min-height: 75px;
`;

export default SearchByFilters;
