import React from 'react';
import styled from 'styled-components';

function Jobs(){
  return <StyledJobs role='main'>
    <Search><Filter>CSS</Filter></Search>
    <Job/>
    <Job/>
    <Job/>
  </StyledJobs>
}

const StyledJobs = styled.section`
  position: absolute;
  z-index: 2;
  border: 1px solid red;
  left: 5%;
  right: 5%;
  top: 120px;
`;

const Filter = styled.div`

`

const Search = styled.div`
  height: 72px;
  border: 1px solid red;
  display: flex;
`;

const Job = styled.div`
  width: 100px;
  height: 100px;
  border: 1px solid red;
  margin-top: 56px;
`;

export default Jobs;