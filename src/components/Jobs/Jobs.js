import React from 'react';
import styled from 'styled-components';
import Filters from '../Filters/Filters';
import Filter from '../Filter/Filter';

function Jobs(){
  return <StyledJobs role='main'>
    <Search>
      <Filters>
        <Filter remove={true} value="Frontend"/>
        <Filter remove={true} value="CSS"/>
        <Filter remove={true} value="JavaScript"/>
      </Filters>
      <Clear/>
    </Search>
    <Job/>
    <Job/>
    <Job/>
  </StyledJobs>
}

const StyledJobs = styled.section`
  position: absolute;
  z-index: 2;
  left: 5%;
  right: 5%;
  top: 120px;
`;

const Search = styled.div`
  display: flex;
  padding: 10px 25px 10px 10px;
  align-items: center;
  border-radius: 5px;
  background-color: #FFF;
  justify-content: space-between;
  box-shadow: 0px 10px 10px RGBA(94, 140, 160, 0.15);
  font-family: Spartan;
  font-size: 13px;
  font-weight: 600;
`;

const Clear = styled.span`
  text-align: center;
  &:after {
    content: 'Clear';
  }
  color: #869290;
`;

const Job = styled.div`
  width: 100px;
  height: 100px;
  margin-top: 56px;
`;

export default Jobs;