import type { Preview } from "@storybook/react";
import { lightTheme } from "../src/themes";
import { ChakraProvider } from "@chakra-ui/react";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <ChakraProvider value={lightTheme}>
        <Story />
      </ChakraProvider>
    ),
  ],
};

export default preview;
