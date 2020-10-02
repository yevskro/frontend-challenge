import React from 'react';
import styled from 'styled-components';
import JobInfo from '../JobInfo/JobInfo';

function Position({ children, postedAt, contract, location }) {
  return (
    <StyledPosition>
      <Children>{children}</Children>
      <JobInfo postedAt={postedAt} contract={contract} location={location} />
    </StyledPosition>
  );
}

const Children = styled.h3`
  display: inline-block;
  padding-top: 11px;
  padding-bottom: 11px;
  font-weight: 600;
  margin: 0;
`;

const StyledPosition = styled.div``;

export default Position;
