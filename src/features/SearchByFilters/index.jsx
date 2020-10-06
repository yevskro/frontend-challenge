import React from 'react';
import styled from 'styled-components';
import SearchClearButton from './SearchClearButton';

/* 
  search by filters children should consist of SearchFilters which gives the developer
  choice to flexend or flexstart its children
*/
function SearchByFilters({ children, visible, onClearFilters }) {
  return (
    <StyledSearchByFilters visible={visible} role="search">
      {children}
      <SearchClearButton onClick={onClearFilters} />
    </StyledSearchByFilters>
  );
}

const StyledSearchByFilters = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 65px;
  padding: 5px 26px 5px 21px;
  margin-bottom: 56px;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0px 10px 10px ${({ theme }) => theme.color.shadow};
  visibility: ${({ visible }) => (visible ? 'visible' : 'hidden')};
`;

export default SearchByFilters;
