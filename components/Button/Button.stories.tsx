import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from "./index";

export default {
  title: "atoms/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  innerText: "Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
  innerText: "Button",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  innerText: "Button",
};
