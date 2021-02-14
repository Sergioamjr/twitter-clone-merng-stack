import { Meta } from "@storybook/react/types-6-0";
import TweetInput from ".";

export default {
  title: "TweetInput",
  component: TweetInput,
} as Meta;

export const Primary = (): JSX.Element => (
  <TweetInput
    userName="john_mac"
    onSubmitNewTweet={(e) => {
      console.log("subit", e);
    }}
  />
);

export const WithError = (): JSX.Element => (
  <TweetInput
    userName="john_mac"
    onSubmitNewTweet={(e) => {
      console.log("subit", e);
    }}
    contentDefault="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam maximus quis metus quis pretium. Fusce nec lacinia nisl. Nam ullamcorper faucibus velit, in suscipit dui venenatis id."
  />
);
