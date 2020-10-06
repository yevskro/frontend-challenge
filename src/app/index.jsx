/* author of this project: Yevgeniy Skroznikov */
import React from 'react';
import styled from 'styled-components';
import Header from '../shared/components/Header';
import Theme from '../shared/providers/Theme';
import Jobs from '../features/Jobs';
import jobData from '../shared/test/test-data.json';

function App() {
  return (
    <Theme>
      <StyledApp role="application">
        <Header />
        <Jobs jobs={jobData} />
      </StyledApp>
    </Theme>
  );
}

const StyledApp = styled.div`
  position: absolute;
  z-index: 1; /* create a z-index our Jobs component will be stacked infront of it */
  height: 100%;
  width: 100%;
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: ${({ theme }) => theme.fontSize.medium};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  background-color: ${({ theme }) =>
    theme.color.neutral.lightGrayishCyanBackground};
`;

export default App;
