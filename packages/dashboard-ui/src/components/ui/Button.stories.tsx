import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./button";

const meta: Meta<typeof Button> = {
  component: (props) => <Button {...props}>Storybook</Button>,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const LargeDefault: Story = {
  args: {
    size: "lg",
    variant: "default",
  },
};

export const SecondaryButton = {
  args: {
    size: "lg",
    variant: "secondary",
  },
};
