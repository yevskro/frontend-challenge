import React from 'react';
import styled from 'styled-components';

function SearchClearButton({ onClick }) {
  /* on click calls a method that is responsible for clearing the search filters */
  return <StyledSearchButton onClick={onClick}>Clear</StyledSearchButton>;
}

const StyledSearchButton = styled.button`
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.medium};
  color: ${({ theme }) => theme.color.neutral.darkGrayishCyan};

  &:hover {
    color: ${({ theme }) => theme.color.primary.desaturtedDarkCyan};
    text-decoration: underline;
    cursor: pointer;
  }
`;

export default SearchClearButton;
