import type { Config } from "@jest/types";

// Sync object
const config: Config.InitialOptions = {
  verbose: true,
  moduleNameMapper: {
    "~(.*)$": "<rootDir>/src/$1",
  },
};

export default config;
