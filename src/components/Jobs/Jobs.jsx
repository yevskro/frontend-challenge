import React from 'react';
import styled from 'styled-components';
import Search from '../Search/Search';
import Job from '../Job/Job';
import jobData from '../../data.json';
import SearchFilters from '../SearchFilters/SearchFilters';
import SearchFilter from '../SearchFilter/SearchFilter';

function Jobs() {
  return (
    <StyledJobs role="main">
      <Search>
        <SearchFilters>
          <SearchFilter remove>JavaScript</SearchFilter>
        </SearchFilters>
      </Search>
      <List>
        <Job data={jobData[0]} />
        <Job data={jobData[1]} />
        <Job data={jobData[2]} />
      </List>
    </StyledJobs>
  );
}

function List({ children }) {
  return <StyledList>{children}</StyledList>;
}

const StyledList = styled.ul`
  margin-bottom: 150px;
`;

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
