import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  component: (props) => <Button {...props}>Storybook</Button>,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const PrimaryLargeContained: Story = {
  args: {
    size: "large",
    variant: "contained",
  },
};

export const PrimaryLargeOutlined: Story = {
  args: {
    size: "small",
    variant: "outlined",
  },
};

export const PrimaryLargeText: Story = {
  args: {
    size: "large",
    variant: "text",
  },
};

export const SecondaryLargeContained: Story = {
  args: {
    size: "large",
    variant: "contained",
  },
};
export const SecondaryLargeOutlined: Story = {
  args: {
    size: "large",
    variant: "outlined",
  },
};
export const SecondaryLargeText: Story = {
  args: {
    size: "large",
    variant: "text",
  },
};
