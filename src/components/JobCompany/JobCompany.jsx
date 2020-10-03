import React from 'react';
import styled from 'styled-components';

function JobCompany({ children, newly, featured }) {
  return (
    <StyledJobCompany>
      {children}
      {newly ? <Newly /> : ''}
      {featured ? <Featured /> : ''}
    </StyledJobCompany>
  );
}

const Status = styled.span`
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

const Newly = styled(Status)`
  background-color: ${({ theme }) => theme.color.primary.desaturtedDarkCyan};
  margin-left: 18px;
  &:after {
    content: 'NEW!';
    font-size: ${({ theme }) => theme.fontSize.xxsmall};
  }
`;

const Featured = styled(Status)`
  background-color: ${({ theme }) => theme.color.neutral.veryDarkGrayishCyan};
  &:after {
    content: 'FEATURED';
    font-size: ${({ theme }) => theme.fontSize.xxsmall};
  }
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
