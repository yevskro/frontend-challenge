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
  white-space: nowrap; /* no wrap arounds to the next line */

  /* increasing the size of the bullet represented by content character '.' */
  &:first-child::before {
    /* 
      no bullet point before the first element fixing the font-size so the element
      does not jump
    */
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
      /* increases the space between the point and the text around */
      padding: 0px 8px 0px 8px;
    }
  }

  @media (min-width: 600px) {
    /* works for tablet and desktop views */
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
