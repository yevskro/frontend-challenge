import React, { useReducer } from 'react';
import styled from 'styled-components';
import SearchByFilters from '../SearchByFilters';
import Job from './Job';
import JobList from './JobList';
import SearchFilters from '../SearchByFilters/SearchFilters';
import SearchFilter from '../SearchByFilters/SearchFilter';
import searchByFiltersReducer from '../../shared/reducers/searchByFiltersReducer';
import {
  removeFilter,
  addFilter,
  clearFilters,
  filterData,
} from '../../shared/reducers/searchByFiltersReducer/actionCreators';

function Jobs({ jobs }) {
  /* filters the job media objects specific to users filters */
  const [search, dispatch] = useReducer(searchByFiltersReducer, { data: jobs });

  function onRemoveFilter(filter) {
    dispatch(removeFilter(filter));
    dispatch(filterData());
  }

  function onAddFilter(filter) {
    dispatch(addFilter(filter));
    dispatch(filterData());
  }

  function onClearFilters() {
    dispatch(clearFilters());
    dispatch(filterData());
  }

  function jsxFilters() {
    /* generate filters based on search filters */
    const filters =
      search.filters ||
      []; /* search.filters may be undefined if not initalized */
    return filters.map((filter) => {
      const value = filter[Object.keys(filter)[0]];
      return (
        <SearchFilter
          filter={filter}
          remove
          onRemoveFilter={onRemoveFilter}
          key={`search-filter-${value}`}
        >
          {value}
        </SearchFilter>
      );
    });
  }

  function jsxJobs() {
    /* generate Job components based on search data */
    const jobsData =
      search.data || []; /* search data may be undefined if not initialized */
    return jobsData.map((job) => (
      <Job data={job} onAddFilter={onAddFilter} key={`job-media-${job.id}`} />
    ));
  }

  return (
    <StyledJobs role="main">
      <SearchByFilters
        visible={search.filters && search.filters.length !== 0}
        onClearFilters={onClearFilters}
      >
        <SearchFilters>{jsxFilters()}</SearchFilters>
      </SearchByFilters>
      <JobList>{jsxJobs()}</JobList>
    </StyledJobs>
  );
}

const StyledJobs = styled.section`
  /* this will stack to the front */
  position: relative;
  z-index: 2;
  margin: 0 5% 0 5%;
  top: -40px;
  background: transparent;

  @media (min-width: 401px) {
    /* gives it a tighter feel */
    margin: 0 11% 0 11%;
  }
`;

export default Jobs;
