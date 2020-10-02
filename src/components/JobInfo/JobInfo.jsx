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
  margin-right: 5px;
  font-weight: 400;

  &:first-child::before {
    font-size: 1.5em;
    content: ' ';
  }

  &:not(:first-child)::before {
    content: '.';
    display: inline-block;
    transform: translateY(-16%);
    margin-right: 5px;
    font-size: 1.5em;
  }
`;

const StyledJobInfo = styled.ul`
  display: flex;
  list-style: none;
  margin-bottom: 15px;
`;

export default JobInfo;