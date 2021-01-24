import { createGlobalStyle } from "styled-components";
import { darken, lighten } from "polished";

const diff = 0.2;

export const defaultColors = {
  white: "#fff",
  dark: "#333",
  darkBackground: "#15202b",
  light: "rgb(56, 68, 77)",
  blue: "#39a2f2",
  avatar: "#6567c7",
  green: "#33994a",
  red: "#cc3939",
};

export const colors = {
  ...defaultColors,
  darkDarken: darken(diff, defaultColors.dark),
  redDarken: darken(diff, defaultColors.red),
  whiteDarken: darken(diff, defaultColors.white),
  darkBackgroundDarken: darken(diff, defaultColors.darkBackground),
  lightDarken: darken(diff, defaultColors.light),
  blueDarken: darken(diff, defaultColors.blue),
  avatarDarken: darken(diff, defaultColors.avatar),
  greenDarken: darken(diff, defaultColors.green),
  redLighten: lighten(diff, defaultColors.red),
  whiteLighten: lighten(diff, defaultColors.white),
  darkBackgroundLighten: lighten(diff, defaultColors.darkBackground),
  lightLighten: lighten(diff, defaultColors.light),
  blueLighten: lighten(diff, defaultColors.blue),
  avatarLighten: lighten(diff, defaultColors.avatar),
  greenLighten: lighten(diff, defaultColors.green),
  darkLighten: lighten(diff, defaultColors.dark),
};

export const spacings = {
  extraSmall: "4px;",
  small: "8px",
  medium: "16px",
  large: "24px",
  extraLarge: "32px",
};

export const fontSizes = {
  extraSmall: ".8rem",
  small: "1rem",
  normal: "1.3rem",
  large: "1.7rem",
  extraLarge: "2.2rem",
};

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif
  }

  html, body, #__next {
    background: ${colors.darkBackground};
    height: 100%;
  }
`;
