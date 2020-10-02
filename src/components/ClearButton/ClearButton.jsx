import React from 'react';
import styled from 'styled-components';

function ClearButton() {
  return <StyledClearButton role='button' />;
}

const StyledClearButton = styled.button`
  text-align: center;
  &:after {
    content: 'Clear';
  }
  color: #869290;
  border: 0;
  background-color: transparent;
`;

export default ClearButton;
