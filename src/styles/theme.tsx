import * as React from 'react';
import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#ffcd01',
    },
    secondary: {
      main: '#202327'
    },
  },
  typography: {
    allVariants: {
      color: '#ffcd01'
    },
    fontFamily: 'Consolas',
    fontSize: 12
  },
  transitions: {
    duration: {
      shortest: 150,
      shorter: 200,
      short: 250,
      // most basic recommended timing
      standard: 300,
      // this is to be used in complex animations
      complex: 375,
      // recommended when something is entering screen
      enteringScreen: 225,
      // recommended when something is leaving screen
      leavingScreen: 195,
    },
    easing: {
      // This is the most common easing curve.
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
      // Objetos que entram na tela na velocidade total e
      // lentamente desaceleram até um ponto de repouso.
      easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
      // Objetos deixam a tela em velocidade máxima. Não desaceleram quando estão fora da tela.
      easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
      // A atenuação de curva sharp é usada por objetos que podem retornar a tela a qualquer momento.
      sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
    },
  },
});

type Props = {
  children: React.ReactNode
}

export const ThemeProvider = ({ children }: Props) => (
  <MuiThemeProvider theme={theme}>
    {children}
  </MuiThemeProvider>
)