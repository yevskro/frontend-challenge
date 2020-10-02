import React from 'react';
import styled from 'styled-components';

function Filter(props){
  return <StyledFilter role='listitem button'>
    <Text>{props.value}</Text>
    {props.remove ? <Remove><RemoveIcon/></Remove> : ''}
  </StyledFilter>
}

const StyledFilter = styled.li`
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #EAF3F2;
  margin: 10px 8px 10px 8px;
  border-radius: 5px;
`;

const Text = styled.span`
  padding: 0px 9px 0px 8px;
  color: #5EAAA6;
`;

const Remove = styled.div`
  width: 32px;
  height: 32px;
  background-color: #5DA5A4;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0px 5px 5px 0px;
`

const RemoveIcon = styled.img`
  content: url('/assets/images/icon-remove.svg');
`;

export default Filter;