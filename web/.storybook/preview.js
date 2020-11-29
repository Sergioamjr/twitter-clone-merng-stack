import { addDecorator } from "@storybook/react";
import { GlobalStyle } from "./../pages/_app";
import "./nextRouterMock";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};

addDecorator((story) => (
  <>
    <GlobalStyle />
    {story()}
  </>
));
