import React from 'react';
import styled from 'styled-components';
import Header from '../Header/Header';
import Jobs from '../Jobs/Jobs';

function App() {
  return (
    <StyledApp role='application'>
      <Header/>
      <Jobs/>
    </StyledApp>
  );
}

const StyledApp = styled.div`
  width: 100%;
  position: absolute;
  z-index: 1;
`
export default App;
