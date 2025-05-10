import type { Preview } from "@storybook/react";
// import { lightTheme } from "../src/themes";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    // chakra: {
    //   theme: lightTheme,
    // },
  },
};

export default preview;
