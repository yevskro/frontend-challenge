import React from 'react';
import styled from 'styled-components';
import Header from '../Header/Header';
import JobList from '../JobList/JobList';

function App() {
  return (
    <StyledApp role='application'>
      <Header/>
      <JobList/>
    </StyledApp>
  );
}

const StyledApp = styled.div`
  width: 100%;
  position: absolute;
  z-index: 1;
`
export default App;
