import React from 'react';
import styled from 'styled-components';
import Filters from '../Filters/Filters';
import Filter from '../Filter/Filter';
import JobInfo from '../JobInfo/JobInfo';

function Position({ children, postedAt, contract, location }) {
  return (
    <StyledPosition>
      <Children>{children}</Children>
      <JobInfo postedAt={postedAt} contract={contract} location={location} />
      <HorizontalLine />
      <Filters>
        <Filter>Frontend</Filter>
        <Filter>Junior</Filter>
        <Filter>CSS</Filter>
        <Filter>JavaScript</Filter>
      </Filters>
    </StyledPosition>
  );
}

const HorizontalLine = styled.hr`
  border-top: 1px solid rgb(191, 193, 192, 0.75);
`;

const Children = styled.h3`
  display: inline-block;
  padding-top: 11px;
  padding-bottom: 11px;
  font-weight: 600;
  margin: 0;
`;

const StyledPosition = styled.div``;

export default Position;
