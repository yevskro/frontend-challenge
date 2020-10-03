import React from 'react';
import styled from 'styled-components';
import Position from '../Position/Position';
import Filters from '../Filters/Filters';
import Filter from '../Filter/Filter';

function JobCard({ data }) {
  return (
    <StyledJob featured={data.featured}>
      <Information>
        <Logo src={data.logo} alt="company logo" />
        <Position
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
        </Position>
      </Information>
      <HorizontalLine />
      <JobFilters>
        <Filters flexEnd>
          <Filter>Frontend</Filter>
          <Filter>Junior</Filter>
          <Filter>CSS</Filter>
          <Filter>JavaScript</Filter>
        </Filters>
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
  border-top: 1px solid ${({ theme }) => theme.color.neutral.darkGrayishCyan};
  opacity: 0.5;
  margin: 0px 0px 4px 0px;
  @media (min-width: 785px) {
    display: none;
  }
`;

const Information = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 10px;
  @media (min-width: 785px) {
    padding-bottom: 0px;
    padding-left: 0px;
  }
`;

const Logo = styled.img`
  width: 48px;
  height: 48px;
  position: absolute;
  transform: translate(
    0px,
    -86px
  ); /* take account of the border width of 5px from x */
  @media (min-width: 555px) {
    width: 88px;
    height: 88px;
    position: relative;
    transform: translate(0, 0);
    margin-right: 24px;
  }
`;

const StyledJob = styled.div`
  box-sizing: border-box;
  border-radius: 5px;
  border-left: 5px solid
    ${(props) =>
      props.featured ? props.theme.color.primary.desaturtedDarkCyan : 'white'};
  background-color: white;
  box-shadow: 0px 10px 10px ${({ theme }) => theme.color.shadow};
  margin-top: 40px;
  width: 100%;
  padding-bottom: 14px;
  padding-left: 20px;
  padding-right: 24px;
  padding-top: 44px;

  @media (min-width: 555px) {
    padding-top: 20px;
    display: flex;
    flex-direction: column;
  }

  @media (min-width: 785px) {
    display: flex;
    align-items: center;
    flex-direction: row;
    padding: 24px 24px 24px 24px;
  }

  @media (min-width: 900px) {
    padding: 30px 48px 30px 48px;
  }
`;

export default JobCard;
