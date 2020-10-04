import React from 'react';
import styled from 'styled-components';

function JobCompany({ children, newly, featured }) {
  return (
    <StyledJobCompany role="heading">
      {children}
      {newly ? <PrimaryPill role="note">NEW!</PrimaryPill> : ''}
      {featured ? <SecondaryPill role="note">FEATURED</SecondaryPill> : ''}
    </StyledJobCompany>
  );
}

const Pill = styled.span`
  line-height: 26px;
  vertical-align: middle;
  height: 24px;
  padding-left: 9px;
  padding-right: 9px;
  color: white;
  border-radius: 20px;
  margin-left: 4px;
  margin-right: 4px;
  font-size: ${({ theme }) => theme.fontSize.small};
`;

const PrimaryPill = styled(Pill)`
  background-color: ${({ theme }) => theme.color.primary.desaturtedDarkCyan};
  margin-left: 18px;
  font-size: ${({ theme }) => theme.fontSize.xxsmall};
`;

const SecondaryPill = styled(Pill)`
  background-color: ${({ theme }) => theme.color.neutral.veryDarkGrayishCyan};
  font-size: ${({ theme }) => theme.fontSize.xxsmall};
`;

const StyledJobCompany = styled.div`
  display: flex;
  color: #5eaaa6;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  height: 24px;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize.xsmall};
  @media (min-width: 500px) {
    font-size: ${({ theme }) => theme.fontSize.small};
  }
`;
export default JobCompany;
