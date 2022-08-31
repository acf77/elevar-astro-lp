import { createTheme } from "@mui/material";
import { colors } from "./colors";

declare module "@mui/material" {
  interface Theme {
    text: string;
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    text?: string;
  }
}

export const materialUiTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1440,
    },
  },
  typography: {
    fontFamily: "Metropolis, Helvetica",
    h1: {
      fontSize: "38px",
      lineHeight: "42px",
      fontWeight: 600,
    },
    h2: {
      fontSize: "34px",
      lineHeight: "38px",
      fontWeight: 600,
    },
    h3: {
      fontSize: "30px",
      lineHeight: "34px",
      fontWeight: 600,
    },
    h4: {
      fontSize: "26px",
      lineHeight: "30px",
      fontWeight: 600,
    },
    h5: {
      fontSize: "22px",
      lineHeight: "26px",
      fontWeight: 600,
    },
  },
  palette: {
    primary: { main: colors.getPrimaryBase() },
    secondary: {
      main: colors.getPrimary(2),
    },
    info: {
      main: colors.neutrals.info,
    },
  },
});
