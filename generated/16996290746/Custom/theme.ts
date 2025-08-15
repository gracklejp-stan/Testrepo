import { createTheme, genPageThemes } from '@backstage/theme';
import { createThemeOverrides } from '@backstage/theme-default';
import { darkTheme as defaultDarkTheme } from '@backstage/theme';

const pageThemes = genPageThemes();

export const darkTheme = createTheme({
  ...defaultDarkTheme,
  palette: {
    ...defaultDarkTheme.palette,
    primary: {
      main: '#00bcd4', // Cyan
    },
    secondary: {
      main: '#ff4081', // Pink
    },
    background: {
      default: '#121212',
      paper: '#1e1e1e',
    },
    text: {
      primary: '#ffffff',
      secondary: '#aaaaaa',
    },
  },
  defaultPageTheme: 'tool',
  pageTheme: {
    ...pageThemes,
    // ⬇️ Set a gradient background instead of an image for all pages
    home: {
      backgroundColor: '#1c1c1c',
      backgroundImage: 'linear-gradient(to right, #1c1c1c, #2c3e50)',
    },
    documentation: {
      backgroundColor: '#1c1c1c',
      backgroundImage: 'linear-gradient(to right, #1c1c1c, #2c3e50)',
    },
    tool: {
      backgroundColor: '#1c1c1c',
      backgroundImage: 'linear-gradient(to right, #1c1c1c, #2c3e50)',
    },
    service: {
      backgroundColor: '#1c1c1c',
      backgroundImage: 'linear-gradient(to right, #1c1c1c, #2c3e50)',
    },
    website: {
      backgroundColor: '#1c1c1c',
      backgroundImage: 'linear-gradient(to right, #1c1c1c, #2c3e50)',
    },
    library: {
      backgroundColor: '#1c1c1c',
      backgroundImage: 'linear-gradient(to right, #1c1c1c, #2c3e50)',
    },
    other: {
      backgroundColor: '#1c1c1c',
      backgroundImage: 'linear-gradient(to right, #1c1c1c, #2c3e50)',
    },
    app: {
      backgroundColor: '#1c1c1c',
      backgroundImage: 'linear-gradient(to right, #1c1c1c, #2c3e50)',
    },
  },
  overrides: createThemeOverrides({
    palette: {
      type: 'dark',
    },
  }),
});