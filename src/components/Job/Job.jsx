import React from 'react';
import styled from 'styled-components';
import Company from '../Company/Company';
import Position from '../Position/Position';
import Filters from '../Filters/Filters';
import Filter from '../Filter/Filter';

function Job({ data }) {
  return (
    <StyledJob featured={data.featured}>
      <Logo src={data.logo} />
      <Information>
        <Company newly={data.newly} featured={data.featured}>
          {data.company}
        </Company>
        <Position
          postedAt={data.postedAt}
          contract={data.contract}
          location={data.location}
        >
          {data.position}
        </Position>
        <HorizontalLine />
        <Filters>
          <Filter>Frontend</Filter>
          <Filter>Junior</Filter>
          <Filter>CSS</Filter>
          <Filter>JavaScript</Filter>
        </Filters>
      </Information>
    </StyledJob>
  );
}

const HorizontalLine = styled.hr`
  border-top: 1px solid rgb(191, 193, 192, 0.75);
`;

const Information = styled.div`
  padding-left: 20px;
  padding-right: 24px;
  padding-top: 32px;
`;

const Logo = styled.img`
  width: 48px;
  height: 48px;
  position: absolute;
  transform: translate(
    19px,
    -24px
  ); /* take account of the border width of 5px from x */
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
`;

export default Job;
