import { Meta } from "@storybook/react/types-6-0";
import Tweet from ".";
import { colors } from "../../theme";

const state = {
  name: "Sérgio Júnior",
  user: "sergioamjr_",
  content:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel sodales nibh, vel egestas orci. Praesent mauris leo, pellentesque non malesuada non, sollicitudin dignissim neque. Fusce ornare nibh eget risus ullamcorper scelerisque. Nulla et pellentesque ligula, a maximus purus. Donec at odio quis dolor efficitur malesuada.",
  _id: "123",
};

export default {
  title: "Tweet",
  parameters: {
    backgrounds: {
      default: "twitter",
      values: [{ name: "twitter", value: colors.darkBackground }],
    },
  },
  component: Tweet,
} as Meta;

export const Primary = (): JSX.Element => {
  return <Tweet {...state} />;
};

export const MultipleTweets = (): JSX.Element => {
  return (
    <>
      <Tweet {...state} />
      <Tweet {...state} />
    </>
  );
};
