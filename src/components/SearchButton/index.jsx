import React from 'react';
import styled from 'styled-components';

function SearchButton({ value }) {
  return <StyledSearchButton role="button">{value}</StyledSearchButton>;
}

const StyledSearchButton = styled.button`
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.medium};
  color: ${({ theme }) => theme.color.neutral.darkGrayishCyan};
`;

export default SearchButton;
