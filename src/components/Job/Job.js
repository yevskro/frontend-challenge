import React from 'react';
import styled from 'styled-components';

function Job(props){
  return <StyledJob featured={props.featured}></StyledJob>
}

const StyledJob = styled.li`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  border-radius: 5px;
  border-left: 5px solid ${props => props.featured ? '#5BA6A2' : '#FFF'};
  background-color: #FFF;
  box-shadow: 0px 10px 10px RGBA(94, 140, 160, 0.15);
  font-family: Spartan;
  font-size: 13px;
  font-weight: 600;
  width: 100px;
  height: 100px;
  margin-top: 56px;
  width: 100%;
`;

export default Job;