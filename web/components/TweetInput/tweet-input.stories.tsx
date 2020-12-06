import { Meta } from "@storybook/react/types-6-0";
import TweetInput from ".";

export default {
  title: "TweetInput",
  component: TweetInput,
} as Meta;

export const Primary = (): JSX.Element => <TweetInput />;
