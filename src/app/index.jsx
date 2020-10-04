import React from 'react';
import styled from 'styled-components';
import Header from '../shared/components/Header';
import Jobs from '../features/Jobs';
import Theme from '../shared/providers/Theme';

function App() {
  return (
    <Theme>
      <StyledApp role="application">
        <Header />
        <Jobs />
      </StyledApp>
    </Theme>
  );
}

const StyledApp = styled.div`
  position: absolute;
  z-index: 1;
  background-color: ${({ theme }) =>
    theme.color.neutral.lightGrayishCyanBackground};
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: ${({ theme }) => theme.fontSize.medium};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  height: 100%;
  width: 100%;
`;

export default App;
