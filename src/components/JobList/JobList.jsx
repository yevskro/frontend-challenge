import React from 'react';
import styled from 'styled-components';
import Filters from '../Filters/Filters';
import Filter from '../Filter/Filter';
import Search from '../Search/Search';
import ClearButton from '../ClearButton/ClearButton';
import JobCard from '../JobCard/JobCard';
import jobData from '../../data.json';

function Jobs() {
  return (
    <StyledJobs role="main">
      <Search>
        <Filters>
          <Filter remove>Frontend</Filter>
          <Filter remove>CSS</Filter>
          <Filter remove>JavaScript</Filter>
        </Filters>
        <ClearButton />
      </Search>
      <List>
        <JobCard data={jobData[0]} />
        <JobCard data={jobData[1]} />
        <JobCard data={jobData[2]} />
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
