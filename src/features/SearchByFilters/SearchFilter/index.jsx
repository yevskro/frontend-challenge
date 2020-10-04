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
  display: flex;
  justify-content: center;
  align-items: center;
  height: 32px;
  margin: 10px 16px 10px 0px;
  border-radius: 5px;
  overflow: hidden; /* hides the squared border on hover of the span child */
  background-color: ${({ theme }) =>
    theme.color.neutral.lightGrayishCyanFilterTablets};

  @media (min-width: 415px) {
    margin: 10px 0px 10px 16px;
  }
`;

const Text = styled.span`
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0px 9px 0px 8px;
  color: ${({ theme }) => theme.color.primary.desaturtedDarkCyan};
  font-size: ${({ theme }) => theme.fontSize.small};
  font-weight: ${({ theme }) => theme.fontWeight.bold};

  &:hover {
    /* only apply colors if this is a not applied filter */
    color: ${({ remove, theme }) =>
      remove ? theme.color.primary.desaturtedDarkCyan : 'white'};
    background-color: ${({ remove, theme }) =>
      remove
        ? theme.color.neutral.lightGrayishCyanFilterTablets
        : theme.color.primary.desaturtedDarkCyan};
    cursor: ${({ remove }) => (remove ? 'auto' : 'pointer')};
  }
`;

const Remove = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  border-radius: 0px 5px 5px 0px;
  background-color: ${({ theme }) => theme.color.primary.desaturtedDarkCyan};

  &:hover {
    background-color: ${({ theme }) => theme.color.neutral.veryDarkGrayishCyan};
    cursor: pointer;
  }
`;

const RemoveIcon = styled.img`
  content: url('/assets/images/icon-remove.svg');
`;

export default SearchFilter;
