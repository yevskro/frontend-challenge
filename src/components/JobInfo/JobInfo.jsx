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
  color: rgba(133, 139, 139, 0.75);
  font-weight: 400;
  white-space: nowrap;

  &:first-child::before {
    font-size: 1.7em;
    content: ' ';
  }

  &:not(:first-child)::before {
    content: '.';
    display: inline-block;
    transform: translateY(-16%);
    padding-left: 4px;
    padding-right: 4px;
    font-size: 1.7em;

    @media (min-width: 550px) {
      padding-left: 8px;
      padding-right: 8px;
    }
  }
`;

const StyledJobInfo = styled.ul`
  display: flex;
  list-style: none;
  margin-bottom: 15px;
  @media (min-width: 491px) {
    margin-bottom: 0px;
  }
`;

export default JobInfo;
