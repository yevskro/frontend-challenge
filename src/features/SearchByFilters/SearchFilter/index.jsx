import React from 'react';
import styled from 'styled-components';

function SearchFilter({
  children,
  filter,
  remove,
  onRemoveFilter,
  onAddFilter,
}) {
  return (
    <StyledSearchFilter role="listitem button">
      <Text
        onClick={remove ? () => {} : () => onAddFilter(filter)}
        remove={remove}
      >
        {children}
      </Text>
      {remove ? (
        <Remove onClick={remove ? () => onRemoveFilter(filter) : () => {}}>
          <RemoveIcon />
        </Remove>
      ) : (
        ''
      )}
    </StyledSearchFilter>
  );
}

const StyledSearchFilter = styled.li`
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) =>
    theme.color.neutral.lightGrayishCyanFilterTablets};
  margin: 10px 16px 10px 0px;
  border-radius: 5px;
  overflow: hidden;
  @media (min-width: 415px) {
    margin: 10px 0px 10px 16px;
  }
`;

const Text = styled.span`
  display: flex;
  height: 100%;
  align-items: center;
  padding: 0px 9px 0px 8px;
  color: ${({ theme }) => theme.color.primary.desaturtedDarkCyan};
  font-size: ${({ theme }) => theme.fontSize.small};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  &:hover {
    color: ${({ remove, theme }) =>
      remove ? theme.color.primary.desaturtedDarkCyan : 'white'};
      &:hover {
    background-color: ${({ remove, theme }) =>
      remove
        ? theme.color.neutral.lightGrayishCyanFilterTablets
        : theme.color.primary.desaturtedDarkCyan};
    cursor: ${({ remove }) => (remove ? 'auto' : 'pointer')};
  }
`;

const Remove = styled.div`
  width: 32px;
  height: 32px;
  background-color: ${({ theme }) => theme.color.primary.desaturtedDarkCyan};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0px 5px 5px 0px;
  &:hover {
    background-color: ${({ theme }) => theme.color.neutral.veryDarkGrayishCyan};
    cursor: pointer;
  }
`;

const RemoveIcon = styled.img`
  content: url('/assets/images/icon-remove.svg');
`;

export default SearchFilter;
