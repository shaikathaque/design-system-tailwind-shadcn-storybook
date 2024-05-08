import type { Preview } from "@storybook/react";
import { withThemeByClassName } from '@storybook/addon-themes';
import '../src/index.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    darkMode: {
      classTarget: 'html',
      darkClass: 'dark',
      lightClass: 'light',
    }
  },
  decorators:[
    withThemeByClassName({
      themes: {
        light: 'light',
        dark: 'dark',
      },
      defaultTheme: 'light'
    })
  ]
};

export default preview;
