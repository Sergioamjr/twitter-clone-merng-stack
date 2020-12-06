import { Meta } from "@storybook/react/types-6-0";
import TweetInput from ".";

export default {
  title: "TweetInput",
  component: TweetInput,
} as Meta;

export const Primary = (): JSX.Element => <TweetInput />;

export const WithError = (): JSX.Element => (
  <TweetInput contentDefault="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam maximus quis metus quis pretium. Fusce nec lacinia nisl. Nam ullamcorper faucibus velit, in suscipit dui venenatis id." />
);
