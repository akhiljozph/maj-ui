import type { Preview } from '@storybook/react';
import React from 'react';
import { ThemeProvider } from '../src/themes/ThemeProvider';

import '../src/themes/dark.css';
import '../src/themes/light.css';
import '../src/tokens/tokens.css';

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
    (Story, context) => {
      // Synchronize Storybook background selection with our ThemeProvider
      const isDarkBackground = context.globals.backgrounds?.value === '#333333';
      const theme = isDarkBackground ? 'dark' : 'light';
      return React.createElement(ThemeProvider, {
        defaultTheme: theme,
        children: React.createElement(Story)
      }, React.createElement(Story));
    },
  ],
};

export default preview;
