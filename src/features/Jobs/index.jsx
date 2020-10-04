import React from 'react';
import styled from 'styled-components';
import SearchByFilters from '../SearchByFilters';
import Job from './Job';
import JobList from './JobList';
import jobData from '../../data.json';
import SearchFilters from '../SearchByFilters/SearchFilters';
import SearchFilter from '../SearchByFilters/SearchFilter';
import useSearchByFilters from '../SearchByFilters/useSearchByFilters';

function Jobs() {
  const { filteredData, filters, addFilter, removeFilter } = useSearchByFilters(
    jobData
  );

  const jsxFilters = filters.map((filter) => (
    <SearchFilter filter={filter} remove onRemoveFilter={removeFilter}>
      {filter[Object.keys(filter)[0]]}
    </SearchFilter>
  ));

  const jsxJobs = filteredData.map((job) => (
    <Job data={job} onAddFilter={addFilter} />
  ));

  return (
    <StyledJobs role="main">
      <SearchByFilters visible={!!filters.length}>
        <SearchFilters>{jsxFilters}</SearchFilters>
      </SearchByFilters>
      <JobList>{jsxJobs}</JobList>
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
