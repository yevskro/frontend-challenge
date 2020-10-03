import React from 'react';
import styled from 'styled-components';

function Filters({ children, flexEnd }) {
  return (
    <StyledFilters flexEnd={flexEnd} role="listbox">
      {children}
    </StyledFilters>
  );
}

const StyledFilters = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: ${(props) => (props.flexEnd ? 'flex-end' : 'flex-start')};
  @media (max-width: 415px) {
    justify-content: flex-start;
  }
`;

export default Filters;
