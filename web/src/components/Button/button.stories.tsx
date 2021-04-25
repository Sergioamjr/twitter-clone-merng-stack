import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import Button, { ButtonProps } from ".";

export default {
  title: "Button",
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = () => <Button>Botão</Button>;

export const Primary = Template.bind({});
Primary.args = {};
