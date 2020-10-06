import React from 'react';
import { ThemeProvider } from 'styled-components';
/* theme developed based on the style-guide */
const theme = {
  color: {
    primary: {
      desaturtedDarkCyan: 'hsl(180, 29%, 50%)',
    },
    neutral: {
      lightGrayishCyanBackground: 'hsl(180, 52%, 96%)',
      lightGrayishCyanFilterTablets: 'hsl(180, 31%, 95%)',
      darkGrayishCyan: 'hsl(180, 8%, 52%)',
      veryDarkGrayishCyan: 'hsl(180, 14%, 20%)',
    },
    shadow: 'rgba(94, 140, 160, 0.15)',
  },
  fontSize: {
    xxsmall: '0.7rem',
    xsmall: '0.8rem',
    small: '0.9rem',
    medium: '1rem',
    large: '1.2rem',
  },
  fontWeight: {
    thin: '400',
    normal: '500',
    bold: '600',
  },
  fontFamily: '"Spartan", "sans-serif"',
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
