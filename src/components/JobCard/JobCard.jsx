import React from 'react';
import styled from 'styled-components';
import Position from '../Position/Position';
import Filters from '../Filters/Filters';
import Filter from '../Filter/Filter';

function JobCard({ data }) {
  return (
    <StyledJob featured={data.featured}>
      <Information>
        <Logo src={data.logo} />
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
  margin-left: auto;
`;

const HorizontalLine = styled.hr`
  border-top: 1px solid rgb(191, 193, 192, 0.75);
  margin: 0px 0px 4px 0px;
  @media (min-width: 785px) {
    display: none;
  }
`;

const Information = styled.div`
  padding: 32px 0px 0px 0px;
  display: flex;
  align-items: center;
  @media (min-width: 491px) {
    padding-bottom: 20px;
    padding-left: 0px;
  }
`;

const Logo = styled.img`
  width: 48px;
  height: 48px;
  position: absolute;
  transform: translate(
    0px,
    -80px
  ); /* take account of the border width of 5px from x */
  @media (min-width: 491px) {
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
  border-left: 5px solid ${(props) => (props.featured ? '#5BA6A2' : '#FFF')};
  background-color: #fff;
  box-shadow: 0px 10px 10px RGBA(94, 140, 160, 0.15);
  font-family: Spartan;
  font-size: 13px;
  font-weight: 600;
  margin-top: 40px;
  width: 100%;
  padding-bottom: 14px;
  padding-left: 20px;
  padding-right: 24px;

  @media (min-width: 550px) {
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    font-size: 1em;
  }

  @media (min-width: 785px) {
    display: flex;
    align-items: center;
    flex-direction: row;
    padding: 0px 24px 0px 24px;
  }

  @media (min-width: 1000px) {
    display: flex;
    align-items: center;
    flex-direction: row;
    padding: 0px 48px 0px 24px;
  }
`;

export default JobCard;
