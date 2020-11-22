import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import Button, { Props } from ".";

export default {
  title: "Button",
  component: Button,
} as Meta;

const Template: Story<Props> = (args) => <Button {...args}>Botão</Button>;

export const Primary = Template.bind({});
Primary.args = {};
