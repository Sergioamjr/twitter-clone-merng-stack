import { createGlobalStyle } from "styled-components";
import { darken, lighten } from "polished";

const diff = 0.2;
const diffDarken = 0.5;

export const defaultColors = {
  white: "#d9d9d9",
  dark: "#333",
  darkBackground: "#000",
  light: "rgb(56, 68, 77)",
  blue: "#38a1f2",
  avatar: "#ff5b5b",
  green: "#33994a",
  red: "rgb(224, 36, 94)",
};

export const colors = {
  ...defaultColors,
  darkDarken: darken(diffDarken, defaultColors.dark),
  redDarken: darken(0.4, defaultColors.red),
  whiteDarken: darken(diffDarken, defaultColors.white),
  darkBackgroundDarken: darken(0.02, defaultColors.darkBackground),
  lightDarken: darken(diffDarken, defaultColors.light),
  blueDarken: darken(0.3, defaultColors.blue),
  avatarDarken: darken(diffDarken, defaultColors.avatar),
  greenDarken: darken(0.3, defaultColors.green),
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
  extraSmall: "7px;",
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

  *:focus {
    outline: double;
    outline-width: 1px;
    outline-color: #38a1f2;
  }
`;
