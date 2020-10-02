import React from 'react';
import styled from 'styled-components';

function Search({ children }) {
  return <StyledSearch role='search'>{children}</StyledSearch>;
}

const StyledSearch = styled.div`
  display: flex;
  padding: 10px 25px 10px 21px;
  align-items: center;
  border-radius: 5px;
  background-color: #fff;
  justify-content: space-between;
  box-shadow: 0px 10px 10px RGBA(94, 140, 160, 0.15);
  font-family: Spartan;
  font-size: 13px;
  font-weight: 600;
  margin-bottom: 56px;
`;

export default Search;
