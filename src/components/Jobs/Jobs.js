import React from 'react';
import styled from 'styled-components';

function Jobs(){
  return <StyledJobs role='main'>

  </StyledJobs>
}

const StyledJobs = styled.section`
  position: absolute;
  z-index: 2;
  border: 1px solid red;
  left: 5%;
  right: 5%;
  top: 120px;
`
export default Jobs;