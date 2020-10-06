import React from 'react';
import styled from 'styled-components';

function JobCompany({ children, newly, featured }) {
  return (
    <StyledJobCompany>
      <h6>{children}</h6>
      {/* should include the company name */}
      {newly ? <PrimaryPill>NEW!</PrimaryPill> : ''}
      {featured ? <SecondaryPill>FEATURED</SecondaryPill> : ''}
    </StyledJobCompany>
  );
}

const Pill = styled.span`
  height: 24px;
  line-height: 27px; /* helps to center the content properly */
  vertical-align: middle;
  padding: 0px 9px 0px 9px;
  margin: 0px 4px 0px 4px;
  color: white;
  border-radius: 20px;
  font-size: ${({ theme }) => theme.fontSize.small};
`;

const PrimaryPill = styled(Pill)`
  margin-left: 18px;
  background-color: ${({ theme }) => theme.color.primary.desaturtedDarkCyan};
  font-size: ${({ theme }) => theme.fontSize.xxsmall};
`;

const SecondaryPill = styled(Pill)`
  background-color: ${({ theme }) => theme.color.neutral.veryDarkGrayishCyan};
  font-size: ${({ theme }) => theme.fontSize.xxsmall};
`;

const StyledJobCompany = styled.div`
  display: flex;
  align-items: center;
  height: 24px;
  color: ${({ theme }) => theme.color.primary.desaturtedDarkCyan};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSize.xsmall};
  @media (min-width: 500px) {
    /* tablet view */
    font-size: ${({ theme }) => theme.fontSize.small};
  }
`;
export default JobCompany;
