import React from 'react';
import styled from 'styled-components';

function Filter({ children, remove }) {
  return (
    <StyledFilter role="listitem button">
      <Text>{children}</Text>
      {remove ? (
        <Remove>
          <RemoveIcon />
        </Remove>
      ) : (
        ''
      )}
    </StyledFilter>
  );
}

const StyledFilter = styled.li`
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) =>
    theme.color.neutral.lightGrayishCyanFilterTablets};
  margin: 10px 16px 10px 0px;
  @media (min-width: 415px) {
    margin: 10px 0px 10px 16px;
  }
`;

const Text = styled.span`
  padding: 0px 9px 0px 8px;
  color: ${({ theme }) => theme.color.primary.desaturtedDarkCyan};
  font-size: ${({ theme }) => theme.fontSize.small};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

const Remove = styled.div`
  width: 32px;
  height: 32px;
  background-color: ${({ theme }) => theme.color.primary.desaturtedDarkCyan};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0px 5px 5px 0px;
`;

const RemoveIcon = styled.img`
  content: url('/assets/images/icon-remove.svg');
`;

export default Filter;
