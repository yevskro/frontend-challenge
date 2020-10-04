import React from 'react';
import styled from 'styled-components';

function JobList({ children }) {
  return <StyledJobList>{children}</StyledJobList>;
}

const StyledJobList = styled.ul`
  margin-bottom: 150px;
`;

export default JobList;
