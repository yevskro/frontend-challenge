import React from 'react';
import styled from 'styled-components';

function SearchFilters({ children, flexEnd }) {
  return (
    <StyledSearchFilters flexEnd={flexEnd} role="listbox">
      {children}
    </StyledSearchFilters>
  );
}

const StyledSearchFilters = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: ${(props) => (props.flexEnd ? 'flex-end' : 'flex-start')};
  @media (max-width: 415px) {
    justify-content: flex-start;
  }
`;

export default SearchFilters;
