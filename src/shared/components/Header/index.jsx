import React from 'react';
import styled from 'styled-components';

function Header() {
  /* setting the image to blank.gif gets rid of the border that would be
  rendered if the src attribute is empty */
  return (
    <header role="presentation">
      <Image src="/assets/images/blank_image.gif" alt="header banner" />
    </header>
  );
}

const Image = styled.img`
  height: 156px;
  width: 100%;
  background-color: ${({ theme }) => theme.color.primary.desaturtedDarkCyan};
  background-image: url('/assets/images/bg-header-mobile.svg');
  @media (min-width: 376px) {
    background-image: url('/assets/images/bg-header-desktop.svg');
  }
`;

export default Header;
