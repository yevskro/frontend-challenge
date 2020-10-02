import React from 'react';
import styled from 'styled-components';
import JobInfo from '../JobInfo/JobInfo';
import Company from '../Company/Company';

function Position({ children, postedAt, contract, location, company }) {
  return (
    <StyledPosition>
      <Company newly={company.newly} featured={company.featured}>
        {company.name}
      </Company>
      <Heading>{children}</Heading>
      <JobInfo postedAt={postedAt} contract={contract} location={location} />
    </StyledPosition>
  );
}

const Heading = styled.h3`
  padding-top: 11px;
  padding-bottom: 11px;
  font-weight: 600;
  margin: 0;
  white-space: nowrap;
`;

const StyledPosition = styled.div`
  display: flex;
  flex-direction: column;
`;

export default Position;
