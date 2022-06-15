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
    xxxl: "4rem",
  },
};

export const lightThemeBase = {
  ...baseTheme,
  colors: {
    background: lightPallette.white,
    foreground: lightPallette.black,
    primaryLight: lightPallette.primaryLight,
    primary: lightPallette.primary,
    primaryDark: lightPallette.primaryDark,
    secondary: lightPallette.secondary,
    info: lightPallette.info,
    success: lightPallette.success,
    warning: lightPallette.warning,
    error: lightPallette.error,
    neutral1: lightPallette.neutral1,
    neutral2: lightPallette.neutral2,
    neutral3: lightPallette.neutral3,
    neutral4: lightPallette.neutral4,
    neutral5: lightPallette.neutral5,
  },
};

export const darkThemeBase = {
  ...baseTheme,
  colors: {
    background: darkPallette.black,
    foreground: darkPallette.white,
    primaryLight: darkPallette.primaryLight,
    primary: darkPallette.primary,
    primaryDark: darkPallette.primaryDark,
    secondary: darkPallette.secondary,
    info: darkPallette.info,
    success: darkPallette.success,
    warning: darkPallette.warning,
    error: darkPallette.error,
    neutral1: darkPallette.neutral1,
    neutral2: darkPallette.neutral2,
    neutral3: darkPallette.neutral3,
    neutral4: darkPallette.neutral4,
    neutral5: darkPallette.neutral5,
  },
};
