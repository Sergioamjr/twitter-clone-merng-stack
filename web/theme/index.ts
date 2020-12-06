import { darken, lighten } from "polished";

const diff = 0.2;

export const defaultColors = {
  white: "#fff",
  darkBackground: "#15202b",
  light: "rgb(56, 68, 77)",
  blue: "#39a2f2",
  avatar: "#6567c7",
  green: "#33994a",
  red: "#cc3939",
};

export const colors = {
  ...defaultColors,
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
};

export const spacings = {
  extraSmall: "4px;",
  small: "8px",
  medium: "16px",
  large: "24px",
  extraLarge: "32px",
};
