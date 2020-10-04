import React from 'react';
import styled from 'styled-components';
import JobInfo from '../JobInfo';
import JobCompany from '../JobCompany';

function JobPosition({ children, postedAt, contract, location, company }) {
  return (
    <StyledJobPosition>
      <JobCompany newly={company.newly} featured={company.featured}>
        {company.name}
      </JobCompany>
      <Heading>{children}</Heading>
      <JobInfo postedAt={postedAt} contract={contract} location={location} />
    </StyledJobPosition>
  );
}

const Heading = styled.h3`
  padding-top: 11px;
  padding-bottom: 11px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  margin: 0px;
  white-space: nowrap;
  &:hover {
    color: ${({ theme }) => theme.color.primary.desaturtedDarkCyan};
    cursor: pointer;
  }
`;

const StyledJobPosition = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 500px) {
    font-size: ${({ theme }) => theme.fontSize.medium};
  }
  @media (min-width: 600px) {
    font-size: ${({ theme }) => theme.fontSize.large};
  }
`;

export default JobPosition;
