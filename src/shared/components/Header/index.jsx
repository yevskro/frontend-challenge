import React from 'react';
import styled from 'styled-components';

function Header() {
  return (
    <header role="presentation">
      <Image src="/assets/images/blank.gif" alt="header banner" />
    </header>
  );
}

const Image = styled.img`
  height: 156px;
  background-color: ${({ theme }) => theme.color.primary.desaturtedDarkCyan};
  background-image: url('/assets/images/bg-header-mobile.svg');
  width: 100%;
  @media (min-width: 376px) {
    background-image: url('/assets/images/bg-header-desktop.svg');
  }
`;

export default Header;
