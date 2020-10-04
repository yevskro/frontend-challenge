import React from 'react';
import styled from 'styled-components';
import Search from '../Search';
import Job from './Job';
import JobList from './JobList';
import jobData from '../../data.json';
import SearchFilters from '../Search/SearchFilters';
import SearchFilter from '../Search/SearchFilter';

function Jobs() {
  return (
    <StyledJobs role="main">
      <Search>
        <SearchFilters>
          <SearchFilter remove>JavaScript</SearchFilter>
        </SearchFilters>
      </Search>
      <JobList>
        <Job data={jobData[0]} />
        <Job data={jobData[1]} />
        <Job data={jobData[2]} />
      </JobList>
    </StyledJobs>
  );
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

export default Jobs;
