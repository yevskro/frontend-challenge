import React from 'react';
import styled from 'styled-components';
import Filters from '../Filters/Filters';
import Filter from '../Filter/Filter';
import JobList from '../JobList/JobList';
import Job from '../Job/Job';

function Jobs(){
  return <StyledJobs role='main'>
    <Search role='search'>
      <Filters>
        <Filter remove={true} value="Frontend"/>
        <Filter remove={true} value="CSS"/>
        <Filter remove={true} value="JavaScript"/>
      </Filters>
      <ClearButton role='button'/>
    </Search>
    <JobList>
      <Job featured={true}/>
      <Job featured={true}/>
      <Job/>
    </JobList>
  </StyledJobs>
}

const StyledJobs = styled.section`
  position: absolute;
  z-index: 2;
  left: 5%;
  right: 5%;
  top: 120px;
  background: transparent;
  @media (min-width: 401px) {
    left: 11%;
    right: 11%;
  }
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

const ClearButton = styled.button`
  text-align: center;
  &:after {
    content: 'Clear';
  }
  color: #869290;
  border: 0;
  background-color: transparent;
`;

export default Jobs;