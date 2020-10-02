import React from 'react';
import styled from 'styled-components';

function Header() {
  return (
    <header role="presentation">
      <Image />
    </header>
  );
}

const Image = styled.img`
  height: 156px;
  background-color: #5da5a4;
  background-image: url('/assets/images/bg-header-mobile.svg');
  width: 100%;
  @media (min-width: 376px) {
    background-image: url('/assets/images/bg-header-desktop.svg');
  }
`;

export default Header;
