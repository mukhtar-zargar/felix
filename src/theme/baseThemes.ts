import { lightPallette } from "./pallette";
import { darkPallette } from "./pallette";

const baseTheme = {
  fontSizes: {
    xxs: "0.1rem",
    xs: "0.5rem",
    s: "0.7rem",
    base: "1rem",
    l: "1.3rem",
    xl: "1.5rem",
    xxl: "2rem",
  },
  spacing: {
    zero: "0px",
    xxxs: "0.1rem",
    xxs: "0.25rem",
    xs: "0.5rem",
    s: "0.75rem",
    base: "1rem",
    l: "1.5rem",
    xl: "2rem",
    xxl: "2.5rem",
    xxxl: "3rem",
  },
};

export const lightThemeBase = {
  ...baseTheme,
  colors: {
    background: lightPallette.white,
    foreground: lightPallette.black,
    primary: lightPallette.primary,
    secondary: lightPallette.secondary,
    info: lightPallette.info,
    success: lightPallette.success,
    warning: lightPallette.warning,
    error: lightPallette.error,
    neutral: lightPallette.neutral,
  },
};

export const darkThemeBase = {
  ...baseTheme,
  colors: {
    background: darkPallette.black,
    foreground: darkPallette.white,
    primary: darkPallette.primary,
    secondary: darkPallette.secondary,
    info: darkPallette.info,
    success: darkPallette.success,
    warning: darkPallette.warning,
    error: darkPallette.error,
    neutral: darkPallette.neutral,
  },
};
