import React from 'react';
import styled from 'styled-components';
import JobPosition from '../JobPosition';
import SearchFilters from '../../SearchByFilters/SearchFilters';
import SearchFilter from '../../SearchByFilters/SearchFilter';

function Job({ data, onAddFilter }) {
  // role, level, languages is an array, tools is an array
  const jsxFilters = [];

  jsxFilters.push(
    <SearchFilter onAddFilter={onAddFilter} filter={{ role: data.role }}>
      {data.role}
    </SearchFilter>
  );
  jsxFilters.push(
    <SearchFilter onAddFilter={onAddFilter} filter={{ level: data.level }}>
      {data.level}
    </SearchFilter>
  );
  data.languages.forEach((language) => {
    jsxFilters.push(
      <SearchFilter onAddFilter={onAddFilter} filter={{ languages: language }}>
        {language}
      </SearchFilter>
    );
  });
  data.tools.forEach((tool) => {
    jsxFilters.push(
      <SearchFilter onAddFilter={onAddFilter} filter={{ tools: tool }}>
        {tool}
      </SearchFilter>
    );
  });

  return (
    <StyledJob featured={data.featured} role="article listitem">
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
        <SearchFilters flexEnd>{jsxFilters}</SearchFilters>
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
    display: none;
  }
`;

const JobInformation = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 10px;
  @media (min-width: 785px) {
    padding-bottom: 0px;
  }
`;

const CompanyLogo = styled.img`
  position: absolute;
  height: 48px;
  width: 48px;
  transform: translate(0px, -86px);
  @media (min-width: 555px) {
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
    display: flex;
    flex-direction: column;
    padding-top: 20px;
  }

  @media (min-width: 785px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 24px 24px 24px 24px;
  }

  @media (min-width: 900px) {
    padding: 30px 48px 30px 48px;
  }
`;

export default Job;
