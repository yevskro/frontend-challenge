import React from 'react';
import styled from 'styled-components';

function Header(){
    return <header role='presentation'>
        <Image/>
    </header>
}

const Image = styled.img`
  height: 156px;
  background-color: #5DA5A4;
  @media (min-width: 375px) {
    content: url('/assets/images/bg-header-mobile.svg');
  }
  @media (min-width: 376px) {
    content: url('/assets/images/bg-header-desktop.svg');
  }
  @media (min-width: 1367px) { 
  /* 
      the svg is actually 1366px in width, most browsers go beyond that width
      and there will be white space on the right edge. this fills it
  */
    width: 100%;
  }
`;

export default Header;