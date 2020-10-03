import React from 'react';
import styled from 'styled-components';

function ClearButton() {
  return <StyledClearButton role="button" />;
}

const StyledClearButton = styled.button`
  text-align: center;
  &:after {
    content: 'Clear';
    font-size: ${({ theme }) => theme.fontSize.medium};
  }
  color: ${({ theme }) => theme.color.neutral.darkGrayishCyan}; /*#869290;*/
`;

export default ClearButton;
