import React from 'react';
import styled from 'styled-components';

function JobInfo({ postedAt, contract, location }) {
  return (
    <StyledJobInfo>
      <Info>{postedAt}</Info>
      <Info>{contract}</Info>
      <Info>{location}</Info>
    </StyledJobInfo>
  );
}

const Info = styled.li`
  white-space: nowrap;

  /* increasing the size of the bullet represented by content character '.' */
  &:first-child::before {
    font-size: 1.7rem;
    content: ' ';
  }

  &:not(:first-child)::before {
    content: '.';
    display: inline-block;
    transform: translateY(-16%);
    padding-left: 4px;
    padding-right: 4px;
    font-size: 1.7rem;

    @media (min-width: 600px) {
      padding-left: 8px;
      padding-right: 8px;
    }
  }
  @media (min-width: 600px) {
    font-size: ${({ theme }) => theme.fontSize.medium};
  }
`;

const StyledJobInfo = styled.ul`
  display: flex;
  list-style: none;
  color: ${({ theme }) => theme.color.neutral.darkGrayishCyan};
  font-weight: ${({ theme }) => theme.fontWeight.thin};
  font-size: ${({ theme }) => theme.fontSize.small};
`;

export default JobInfo;
