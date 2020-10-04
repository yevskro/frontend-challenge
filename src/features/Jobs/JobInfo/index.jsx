import React from 'react';
import styled from 'styled-components';

function JobInfo({ postedAt, contract, location }) {
  return (
    <StyledJobInfo role="list">
      <Info role="listitem">{postedAt}</Info>
      <Info role="listitem">{contract}</Info>
      <Info role="listitem">{location}</Info>
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
    display: inline-block;
    content: '.';
    padding: 0px 4px 0px 4px;
    font-size: 1.7rem;
    transform: translateY(-16%); /* moves the . to the vertical center */

    @media (min-width: 600px) {
      padding: 0px 8px 0px 8px;
    }
  }

  @media (min-width: 600px) {
    font-size: ${({ theme }) => theme.fontSize.medium};
  }
`;

const StyledJobInfo = styled.ul`
  display: flex;
  color: ${({ theme }) => theme.color.neutral.darkGrayishCyan};
  font-weight: ${({ theme }) => theme.fontWeight.thin};
  font-size: ${({ theme }) => theme.fontSize.small};
`;

export default JobInfo;
