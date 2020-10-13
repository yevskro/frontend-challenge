import React from 'react';
import styled from 'styled-components';

function SearchFilter({
  children,
  filter,
  remove,
  onRemoveFilter,
  onAddFilter,
}) {
  /* a filter that is removeable should only handle an onClick
  on the removing icon.
    a filter that is addable shall not have the remove prop or
    the prop would be set to false. this filter can be clickable
    by the text content
  */
  return (
    <StyledSearchFilter>
      <Text
        onClick={remove ? () => {} : () => onAddFilter(filter)}
        remove={remove}
      >
        {children}
      </Text>
      {remove ? (
        <Remove onClick={() => onRemoveFilter(filter)}>
          <img src="/assets/images/icon-remove.svg" alt="remove icon" />
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
    /* only apply colors if this is a not removable filter */
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

export default SearchFilter;
