import React from 'react';
import styled from 'styled-components';

function Company({ children, newly, featured }) {
  return (
    <StyledCompany>
      {children}
      {newly ? <Newly /> : ''}
      {featured ? <Featured /> : ''}
    </StyledCompany>
  );
}

const Status = styled.div`
  line-height: 28px;
  vertical-align: middle;
  height: 24px;
  padding-left: 9px;
  padding-right: 9px;
  color: white;
  border-radius: 20px;
  margin-left: 4px;
  margin-right: 4px;
  font-size: 0.8em;
`;

const Newly = styled(Status)`
  background-color: #5da3a1;
  margin-left: 18px;
  &:after {
    content: 'NEW!';
  }
`;

const Featured = styled(Status)`
  background-color: #2b3939;
  &:after {
    content: 'FEATURED';
  }
`;

const StyledCompany = styled.div`
  display: flex;
  color: #5eaaa6;
  weight: 500;
  height: 24px;
  align-items: center;
`;
export default Company;
