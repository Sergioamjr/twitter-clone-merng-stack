import { Story, Meta } from "@storybook/react/types-6-0";
import Tweet, { Props } from ".";
import { colors } from "../../theme";

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

const Template: Story<Props> = (args) => <Tweet {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  name: "Sérgio Júnior",
  user: "sergioamjr_",
  content:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel sodales nibh, vel egestas orci. Praesent mauris leo, pellentesque non malesuada non, sollicitudin dignissim neque. Fusce ornare nibh eget risus ullamcorper scelerisque. Nulla et pellentesque ligula, a maximus purus. Donec at odio quis dolor efficitur malesuada.",
  _id: "123",
};
