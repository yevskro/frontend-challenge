import React from 'react';
import styled from 'styled-components';
import JobPosition from '../JobPosition';
import SearchFilters from '../../SearchByFilters/SearchFilters';
import SearchFilter from '../../SearchByFilters/SearchFilter';

function Job({ data, onAddFilter }) {
  function jsxFilters() {
    /* creates SearchFilters based on data information */
    const filters = [];

    filters.push(
      <SearchFilter
        onAddFilter={onAddFilter}
        filter={{ role: data.role }}
        key={`job-item-filter-${data.role}`}
      >
        {data.role}
      </SearchFilter>
    );

    filters.push(
      <SearchFilter
        onAddFilter={onAddFilter}
        filter={{ level: data.level }}
        key={`job-item-filter-${data.level}`}
      >
        {data.level}
      </SearchFilter>
    );

    data.languages.forEach((language) => {
      filters.push(
        <SearchFilter
          onAddFilter={onAddFilter}
          filter={{ languages: language }}
          key={`job-item-filter-${language}`}
        >
          {language}
        </SearchFilter>
      );
    });

    data.tools.forEach((tool) => {
      filters.push(
        <SearchFilter
          onAddFilter={onAddFilter}
          filter={{ tools: tool }}
          key={`job-item-filter-${tool}`}
        >
          {tool}
        </SearchFilter>
      );
    });

    return filters;
  }

  return (
    <StyledJob featured={data.featured} role="listitem">
      <JobInformation>
        <CompanyLogo src={data.logo} alt="company logo" />
        <JobPosition
          company={{
            name: data.company,
            newly: data.newly,
            featured: data.featured,
          }}
          postedAt={data.postedAt}
          contract={data.contract}
          location={data.location}
        >
          {data.position}
        </JobPosition>
      </JobInformation>
      <HorizontalLine />
      <JobFilters>
        <SearchFilters flexEnd>{jsxFilters()}</SearchFilters>
      </JobFilters>
    </StyledJob>
  );
}

const JobFilters = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`;

const HorizontalLine = styled.hr`
  opacity: 0.5;
  margin: 0px 0px 4px 0px;
  border-top: 1px solid ${({ theme }) => theme.color.neutral.darkGrayishCyan};
  @media (min-width: 785px) {
    /* desktop view */
    display: none;
  }
`;

const JobInformation = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 10px;
  @media (min-width: 785px) {
    /* desktop view */
    padding-bottom: 0px;
  }
`;

const CompanyLogo = styled.img`
  position: absolute;
  height: 48px;
  width: 48px;
  transform: translate(
    0px,
    -86px
  ); /* translate the icon to align half way above the container top border */
  @media (min-width: 555px) {
    /* tablet view */
    position: relative;
    height: 88px;
    width: 88px;
    margin-right: 24px;
    transform: translate(0, 0);
  }
`;

const StyledJob = styled.div`
  box-sizing: border-box;
  width: 100%;
  margin-top: 40px;
  padding: 44px 24px 14px 20px;
  background-color: white;
  border-radius: 5px;
  border-left: 5px solid
    ${(props) =>
      props.featured ? props.theme.color.primary.desaturtedDarkCyan : 'white'};
  box-shadow: 0px 10px 10px ${({ theme }) => theme.color.shadow};

  @media (min-width: 555px) {
    /* tablet view */
    display: flex;
    flex-direction: column;
    padding-top: 20px;
  }

  @media (min-width: 785px) {
    /* desktop view */
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 24px 24px 24px 24px;
  }

  @media (min-width: 900px) {
    /* fits it nicer on a bigger desktop view */
    padding: 30px 48px 30px 48px;
  }
`;

export default Job;
